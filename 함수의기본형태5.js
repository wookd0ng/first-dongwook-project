function callTentimes(callback){
    for(let i=0; i<10; i++){
        callback();
    }
}
callTentimes(function(){
    console.log("함수호출");
});