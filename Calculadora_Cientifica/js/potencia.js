function potencia (form){
var a = document.form.v1.value
var b = document.form.v2.value
a=parseFloat(a)
b=parseFloat(b)
var res =Math.pow(a,b)
document.getElementById("resultado").innerHTML=res

}