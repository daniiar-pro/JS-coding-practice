# **JS-coding-practice**

`1) removePrefix

Clear all '$' signs from numbers in a given array. => [2,3,4,5,15]`

`removePrefix(['$2', '$3', '$4', '$5','$15']) // [2,3,4,5,15`

`1) Solution :
  function removePrefix(arr){
    let result = [];
    
    for (let i = 0; i < arr.length; i++){
    result.push(arr[i].slice(1));
    }
    
    return result;
  }`
