function oo(){
    var c=document.getElementById("his").value
    var d=document.getElementById("her").value
    if(c=="" && d==""){
        window.alert("Enter All Name Fields!!")
    }
    else{
    var a=document.getElementById("results")
    var b=document.getElementById("thanks")
    var ran=Math.floor(Math.random()*101)
    console.log(c)
    console.log(d)
    b.textContent="Thanks For Visiting. Come Again!❤️"
    a.innerHTML="Love Match Percentage Between <b>"+c+"</b> and <b>"+d+"</b> is: <b>"+ran+"</b> %";
    }
}