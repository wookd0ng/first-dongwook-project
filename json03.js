let aa=`{
    "channel":"TVN",
    "name":"강호동",
    "title":"방송인",
    "program":"올탁구나",
    "age":51,

    "sosok":"SM C&C"
}`;
let bb=JSON.parse(aa);
console.log(`채널명은 ${bb.program},이름은 ${bb.name}, 직업은 ${bb.job}`);