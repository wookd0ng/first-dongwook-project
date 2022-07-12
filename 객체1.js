let array=[{
    name:'고구마',
    price:1000
},
{   name:'참외',
    price:2000

}];

let scoreArr=array.sort((itemA,itemB)=>{
    return itemB.price-itemA.price
});
console.log(scoreArr);