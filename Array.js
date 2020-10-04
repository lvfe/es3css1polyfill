function Array(arr){
    let entry = "Entries"; 
    this[entry] = arr;
}
Array.isArray = function(arr){
    if(!Array.isArray){
        return Object.prototype.toString.call(arr);
        // or return Reflect.apply(Object.prototype, arr, []);但是这是在es6中支持反射
    }
    else return Array.isArray(arr);
}
Array.prototype.sort = function(arr){

}
