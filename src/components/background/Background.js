
import React, { useRef, useEffect } from 'react'
import * as THREE from "three"

import fragmentshader from 'raw-loader!glslify-loader!./fragmentshader.glsl';
import vertexshader from 'raw-loader!glslify-loader!./vertexshader.glsl';

export default function Canvas(props) {


    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function rgb(r, g, b) {
        return new THREE.Vector3(r, g, b);
    }

    useEffect(() => {
        if(document.querySelector('canvas.background') !== null) return;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        renderer.domElement.className = "background"
        document.body.prepend( renderer.domElement )
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      
        let vCheck = false;
    
        camera.position.z = 5;
    
        var randomisePosition = new THREE.Vector2(1, 2);
    
        var R = function(x, y, t) {
            return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
        }
         
        var G = function(x, y, t) {
            return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
        }
          
        var B = function(x, y, t) {
            return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
        }

        let geometry = new THREE.PlaneGeometry(window.innerWidth / 2, 400, 100, 100);
        let material = new THREE.ShaderMaterial({
            uniforms: {
                u_bg: {type: 'v3', value: rgb(162, 138, 241)},
                u_bgMain: {type: 'v3', value: rgb(162, 138, 241)},
                u_color1: {type: 'v3', value: rgb(162, 138, 241)},
                u_color2: {type: 'v3', value: rgb(82, 31, 241)},
                u_time: {type: 'f', value: 0},
                u_randomisePosition: { type: 'v2', value: randomisePosition }
            },
            fragmentShader:   fragmentshader,
            vertexShader:  vertexshader,
        });
    
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 140, -280);
        mesh.scale.multiplyScalar(5);
        mesh.rotationX = -1.0;
        mesh.rotationY = 0.0;
        mesh.rotationZ = 0.1;
        scene.add(mesh);
    
        renderer.render( scene, camera );
        let t = 0;
        let j = 0;
        let x = randomInteger(0, 32);
        let y = randomInteger(0, 32);
        const animate = function () {
            
            setTimeout( () =>requestAnimationFrame( animate ), 1000 / 100 );
            renderer.render(scene, camera);
            
            mesh.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j);
            
            mesh.material.uniforms.u_color1.value = new THREE.Vector3(R(x,y,t/2), G(x,y,t/2), B(x,y,t/2));
    
            mesh.material.uniforms.u_time.value = t;
            if(t % 0.1 == 0) {         
                if(vCheck == false) {
                    x -= 1;
                    if(x <= 0) {
                        vCheck = true;
                    }
                } else {
                    x += 1;
                    if(x >= 32) {
                        vCheck = false;
                    }
    
                }
            }
    
            // Increase t by a certain value every frame
            j = j + 0.01;
            t = t + 0.05;
        };
        animate();
    }, [])
    
    return <></>
}