function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    // compare values of both arrays and push to result array
    while(i < arr1.length && j < arr2.length){
        if(arr1[i]< arr2[j]){
            result.push(arr1[i]);
            i += 1;
        }else{
            result.push(arr2[j]);
            j +=1;
        }
    }
    // if arr2 is longer, this loop will run 
    while(j < arr2.length){
        result.push(arr2[j]);
        j += 1;
    }
    // if arr1 is longer, this loop will run
    while(i < arr1.length){
        result.push(arr1[i]);
        i+=1;
    }   
    return result;
}

function mergeSort(arr) {
    if(arr.length <=1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

module.exports = { merge, mergeSort};