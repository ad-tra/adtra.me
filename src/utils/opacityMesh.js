
const getOpacityMesh = (array, i, opacityStep) => {
    let resultMesh = [...array]
    let filterStep = opacityStep * 2
    const MIN_VAlUE = 0.2;
    //target
    resultMesh[i] = {opacity : 1, filter: 0}
    
    //before  target
    for(let j = i-1; j > -1; j--){
        resultMesh[j] = {opacity: resultMesh[j+1].opacity - opacityStep, filter : resultMesh[j+1].filter + filterStep};
        
    }
    

    //after target 
    for(let k = i+1; k <resultMesh.length; k++){
        resultMesh[k] = {opacity: resultMesh[k-1].opacity  - opacityStep, filter: resultMesh[k-1].filter + filterStep} 
    }
    
    return resultMesh
}
export default getOpacityMesh;