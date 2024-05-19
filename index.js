console.log("Hey this is bura");
window.alert("This is buras Counter");
const decrease=document.getElementById("dec");
const increase=document.getElementById("inc");
const reset=document.getElementById("res");
const la=document.getElementById("la");
let count=0;
document.getElementById("inc").onclick=function(){
    count++;
    document.getElementById("la").textContent=count;


}
document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("la").textContent=count;
}
document.getElementById("res").onclick=function(){
    la.textContent=0;
}
