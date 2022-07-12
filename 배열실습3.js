const arr=["seoul","korea","good","hankook","university"];
let newarr=arr.filter((item,index)=>{
    return item.length==5;
});
console.log(newarr);