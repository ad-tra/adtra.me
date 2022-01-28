
const getOpacityMesh = (array, i, opacityStep) => {
    let resultMesh = [...array]
    const MIN_VAlUE = 0.2;
    //target
    resultMesh[i] = 1
    
    //before  target
    for(let j = i-1; j > -1; j--){
        resultMesh[j] = resultMesh[j+1] - opacityStep;
        if(resultMesh[j] < 0) resultMesh[j] =  MIN_VAlUE

    }
    

    //after target 
    for(let k = i+1; k <resultMesh.length; k++){
        resultMesh[k] = resultMesh[k-1]  - opacityStep 
        if(resultMesh[k] < 0) resultMesh[k] =  MIN_VAlUE;
    }
    
    return resultMesh
}
export default getOpacityMesh;