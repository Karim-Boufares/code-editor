var ta1=document.getElementById("ta1");
var btn1p=document.getElementById("btn1");
var btn2r=document.getElementById("btn2");
var result=document.getElementById("result");

btn1p.onclick=()=>{
    result.innerHTML=ta1.value;
    localStorage.setItem("rslt",ta1.value);
}
btn2r.onclick=()=>{
    result.innerHTML="";
}
onload =()=>{
    ta1.value=localStorage.getItem("rslt");
}