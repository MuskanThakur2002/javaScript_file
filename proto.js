var mobile = function(model_no){
    // .....................Instance member.....................
    this.model = model_no;
    this.price=3000;
};
var sumsung = new mobile("gelexy");
// sumsung.color="white"
// console.log(sumsung)
var nokia = new mobile("3311")
// nokia.color="skyblue"
// console.log(nokia)
// ..................................prototype member................
mobile.prototype.color="white"
console.log(nokia.color)
console.log(sumsung.color)


