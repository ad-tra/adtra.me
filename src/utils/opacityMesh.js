
const getOpacityMesh = (array, i, opacityStep) => {
    let resultMesh = [...array]
    //target
    resultMesh[i] = 1
    
    //before  target
    for(let j = i-1; j > -1; j--)
        resultMesh[j] = resultMesh[j+1] - opacityStep;
    

    //after target 
    for(let k = i+1; k <resultMesh.length; k++)
        resultMesh[k] = resultMesh[k-1]  - opacityStep
    
    return resultMesh
}
export default getOpacityMesh;