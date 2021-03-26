class mobile{
    constructor(){
        this.a=12
        this.show=function(){
            return "instance member"
        }

    }
    display(){
        return "prototype member"
    }
}
var nokia = new mobile()
console.log(nokia.display())
console.log(nokia)


// class father{
//     showfmoney(){
//         return "father money"
//     }
// }
// class son extends father{
//     showsmoney(){
//         return "son money"
//     }
// }
// class grandson extends son{
//     showgmoney(){
//         return "grand son money"
//     }
// }

// // var s = new son()
// // console.log(s.showfmoney())
// // console.log(s.showsmoney())


// var g=new grandson
// console.log(g.showfmoney())
// console.log(g.showsmoney())
// console.log(g.showfmoney())



// class father{
//     constructor(money){
//         this.fmoney=money
//     }
//     showfmoney(){
//         return this.fmoney+" " +"father money"
//     }
// }
// class son extends father{
//     constructor(money=10000){
//         super(money+10000)
//     }
//     showsmoney(){
//         return "son money"
//     }
// }

// var s=new son()
// console.log(s.showfmoney());
// console.log(s.showsmoney());