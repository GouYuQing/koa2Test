// function getSomething(){
//     return 'something'
// }
// async function testAsync(){
//     return 'hello async'
// }
// async function test(){
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1,v2);
// }
// test();
// const result = testAsync();
// console.log(result);

function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("long_time value"),1000)
    })
}
async function test(){
    const v1 = await takeLongTime();
    console.log(v1);
}
test();