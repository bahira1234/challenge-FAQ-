let plus =document.getElementById("plus")
let minus =document.getElementById("minus")
let text=document.getElementById("text")



console.log(plus);
plus.onclick=function(){
    minus.style.display="block"
text.style.display="block"
    plus.style.display="none"
}
minus.onclick=function(){
    minus.style.display="none"
    plus.style.display="block"
    text.style.display="none"
}