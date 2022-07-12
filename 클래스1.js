class pro{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}

let aa=new pro("초코파이",2400,10);
console.log("품명:"+aa.name);
console.log("가격:"+aa.price);
console.log("개수:"+aa.quantity);
console.log(`판매금액:${aa.price*aa.quantity}`);