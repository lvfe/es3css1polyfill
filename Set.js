function Set(arr){
    var slow = 0;
    arr.sort(); //好像es3不支持sort, 但是这种方法性能好, 本项目array.js支持sort
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==arr[i+1]){
            arr[slow] = arr[i];
            slow+=1
        }
    }
    arr.splice(slow, arr.length-slow);
    // let entry = Symbol.for("Entries"); es3不支持Symbol
    let entry = "Entries";
    this[entry] = arr;
}

// test
var set = new Set([1,2,2,4])
console.log(new Set([1,2,2,4]));

module.exports = Set;