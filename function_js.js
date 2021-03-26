// function mark(marks){
//     n=marks.length
//     let i=0
//     var sum = 0
//     var k=marks[0].length+marks[1].length+marks[2].length+marks[3].length
//     while(i<n){
//         var j=0
//         b=marks[i].length
//         while(j<b){
//             sum=sum+marks[i][j]
//             j=j+1
//         }
//         i=i+1
//     }
//     return (sum/k)
// }

// const { setPrint } = require("readline-sync")

// var marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65],
//     [95, 45, 78],
//     [87, 67, 49, 68, 88]
// ]
// console.log(mark(marks))

// function MISSISSIPPI(a){
//     var list1=Array.from(a)
//     let list2=[]
//     let dict1={}
//     for (i in list1){
//         if (!list2.includes(list1[i])){
//             list2.push(list1[i])
//         }
//     }
//     for (k in list2){
//         let count=0
//         for (n in list1){
//             if (list2[k]===list1[n]){
//                 count=count+1
//             }
//         dict1[list2[k]]=count
//         }
//     }
//     return (dict1)
// }
// var a="MISSISSIPPI"
// console.log(MISSISSIPPI(a))


// let list1=[
//     {"first":"1"}, 
//     {"second": "2"}, 
//     {"third": "1"}, 
//     {"four": "5"}, 
//     {"five":"5"}, 
//     {"six":"9"},
//     {"seven":"7"}
// ] 
// var unique = function(a){
//     let list2=[]
//     for (i in list1){
//         for (k in list1[i]){
//             if (!list2.includes(list1[i][k])){
//                 list2.push(list1[i][k])
//             }
//         }
//     }
//     return(list2)
// }
// console.log(unique(list1))

// var dict1={"sam":20, "muskan":40, "sachin":50, "preeti":10}
// var max=dict1["sam"]
// var maximum=function(dict1,max){
//     for (value in dict1){
//         if (max<dict1[value])
//             max=dict1[value]
//     }
//     return(max)
// }
// console.log(maximum(dict1,max))


// var user={
//     firstname:"muskan",
//     coursecount:"4",
//     getcourse:function(){
//         console.log("line 7", this);
//         function sayhello(){
//             console.log("hello")
//             console.log("line10", this)
//         }
//         sayhello()
//     }
// };
// user.getcourse()


// hoisting
// Scope
// call back
// asink awaik
// classes
// promisses

// function say(){
//     console.log("hey i am muskan")
// }
// function geeky(callback){
//     console.log("muskan is my name")
//     callback()
// }
// function my(oops){
//     console.log("good day")
//     oops(say)
// }
// my(geeky)

// function say(a){
//     console.log("hey i am muskan" + " " +a)
// }
// function geeky(a, callback){
//     console.log("muskan is my name")
//     // var a= 101
//     callback(a)
// }
// function my(oops){
//     console.log("good day")
//     oops(101, say)
// }
// my(geeky)


// function geeky(callback){
//     console.log("muskan is my name")
//     callback()
// }
// geeky(function say(){
//         console.log("hey i am muskan")
//     })


// function geeky(callback){
//     console.log("muskan is my name")
//     callback()
// }
// geeky(function(){
//         console.log("hey i am muskan")
//     })


// function geeky(callback){
//     console.log("muskan is my name")
//     var a=10
//     callback(a)
// }
// geeky(a=>  console.log("hey i am muskan"+a))

// ......................................................asyncrones...............................................................................
// setTimeout(function show(){
//     console.log("i am show function");
// }, 5000)
// console.log("end")

// ..............................................call back hell.................................................

// function getname(name, callback){
//     setTimeout(()=>{
//         console.log("inside name function")
//         callback(name);
//     }, 2000)
// }
// const nm = getname("sonam", (nm)=> {console.log(nm)})

// function gethobbies(name, callback){
//     setTimeout(()=>{
//         console.log("inside hobbie function")
//         callback(["cricket,reading, hobbie"]);
//     }, 1000)
// }
// const nm = getname("sonam", (nm)=> {console.log(nm); 
// gethobbies(nm,(hobby)=>{console.log(hobby)})})
// console.log("end")

// // .....................................constructor...........................................................
// function mobile(){
//     this.model="3710"
//     this.price=function(){
//         console.log(this.model+" price rs.3000")
//     }
//     price()
// }
// var sumsung = new mobile();
// sumsung.price();
// mobile()