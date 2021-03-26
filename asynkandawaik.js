
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
// getname("sonam")
// .then(nm=>gethobbies(nm))
// .then(hobby=> console.log(hobby))

async function showhobby(){
    try{
        const nm = await getname('sonam')
        const hobby = await gethobbies(nm)
        console.log(hobby)
    }catch{
    console.log("could not fetch")
}
}
showhobby()