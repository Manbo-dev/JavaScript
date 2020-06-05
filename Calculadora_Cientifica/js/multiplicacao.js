function multiplicacao(form){
    var a = document.form.v1.value
    var b = document.form.v2.value
    if(document.form.modulo.checked==true){
        var res=parseFloat(a)*parseFloat(b);
        res=Math.abs(res)
    }else{
        var res=parseFloat(a)*parseFloat(b);
    }
    document.getElementById("resultado").innerHTML=res
}