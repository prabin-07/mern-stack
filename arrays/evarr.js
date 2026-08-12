//Create a new array containing only the even numbers from an existing array

let arr = [1,2,3,4,5,6];
let ev = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        ev.push(arr[i])
    }
}
console.log(ev);