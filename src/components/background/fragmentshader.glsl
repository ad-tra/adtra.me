        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                                -0.577350269189626,  // -1.0 + 2.0 * C.x
                                0.024390243902439); // 1.0 / 41.0
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));

            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }
       
       
       
       
       
       
       
       
        vec3 rgb(float r, float g, float b) {
            return vec3(r / 150., g / 150., b / 150.);
        }

        vec3 rgb(float c) {
            return vec3(c / 150., c / 150., c / 150.);
        }

        uniform vec3 u_bg;
        uniform vec3 u_bgMain;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform float u_time;

        varying vec2 vUv;
        varying float vDistortion;

        void main() {
            vec3 bg = rgb(u_bg.r, u_bg.g, u_bg.b);
            vec3 c1 = rgb(u_color1.r, u_color1.g, u_color1.b);
            vec3 c2 = rgb(u_color2.r, u_color2.g, u_color2.b);
            vec3 bgMain = rgb(u_bgMain.r, u_bgMain.g, u_bgMain.b);

            float noise1 = snoise(vUv + u_time * 0.001);
            float noise2 = snoise(vUv * 2. + u_time * 0.001);

            vec3 color = bg;
            color = mix(color, c1, noise1 * 0.9);
            color = mix(color, c2, noise2 * 0.9);

            color = mix(color, mix(c1, c2, vUv.x), vDistortion);

            float border = smoothstep(0.5, 0.6, vUv.x);

            color = mix(color, bgMain, 1. -border);

            gl_FragColor = vec4(color, 1.0);
        }