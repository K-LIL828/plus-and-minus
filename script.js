let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus_btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus_btn")
let total_price=document.getElementById("finalPrice")
let prices=[1379,176,249]
for (let i = 0; i < heart_btn.length; i++) {
    heart_btn[i].addEventListener("click",function(){
        if(heart_btn[i].style.color=="red"){
            heart_btn[i].style.color="black"
        }
        else{
            heart_btn[i].style.color="red"
        }
    })
plus_btn[i].addEventListener("click",function(){
Quant[i].value=Number(Quant[i].value) +1
total_price.value=Number(total_price.value)+prices[i]
})
minus_btn[i].addEventListener("click",function(){
    if (Quant[i].value>0) {
        Quant[i].value=Number(Quant[i].value) -1
        total_price.value=Number(total_price.value)-prices[i]
    }
    })
    
}

