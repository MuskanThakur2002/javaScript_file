// const promiseobj = new Promise((resolve, reject) => {
//     let req = true
//     if (req==true){
//         resolve("request success")
//     }else{
//         reject("reject")
//     }
// }).then(
//     (value)=>console.log(value),
//     (error)=>console.log(error),
// )

// // ...........................promise catch................................................
// const promiseobj = new Promise((resolve, reject) => {
//     let req = false
//     if (req==true){
//         resolve("request success")
//     }else{
//         reject("reject")
//     }
// }).then(
//     (value)=>console.log(value),
// ).catch((error)=>{console.log(error)})
// .....................................promise chain........................................................

// const promiseobj= new Promise((resolve, reject)=>{
//     let num = 10
//     resolve(num)
// }).then(
//     (value)=>{
//         console.log(value);
//         return value+10
// }).then(
//     (value)=>{
//         console.log(value+80)
//         return value+30
// })
// ......................................finally..............................................................

// const promiseobj=new Promise((resolve, reject)=>{
//     let req=true
//     if (req==false){
//         resolve("successfull")
//     }else{
//         reject("error coming")
//     }
// }).then
//     ((value)=>{console.log(value)
// }).catch(
//     (error)=>{console.log(error)
// }).finally(()=>{console.log("cleaned up")})

// // .............................................

function getname(name, callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("inside name function")
            resolve(name);
        }, 2000)
    })
}
function gethobbies(name, callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("inside hobbie function")
            resolve (["cricket,reading, hobbie"]);
        }, 1000)
    })
}
getname("sonam")
.then(nm=>gethobbies(nm))
.then(hobby=> console.log(hobby))
