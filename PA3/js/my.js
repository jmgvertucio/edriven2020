var subtot = document.getElementById("subtotal");
var amount_paid = document.getElementById("amount_paid");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var change = document.getElementById("change");
var submit = document.getElementById("submit");

subtot.addEventListener("change", function(){
    
    if(parseInt(subtot.value) >= 100 && parseInt(subtot.value) <= 10000){
        amount_paid.disabled = false;
        tax.value = (subtot.value * 0.12);
        total.value = parseInt(tax.value) + parseInt(subtot.value);
        amount_paid.value = total.value;
        amount_paid.min = total.value;
        change.value = parseInt(amount_paid.value) - parseInt(total.value);
        submit.disabled = false;
        submit.style.backgroundColor = "green";
    }
    
    else{
        amount_paid.disabled = true;
        submit.disabled = true;
        submit.style.backgroundColor = "rgb(168, 16, 16)";
    }
})

amount_paid.addEventListener("change", function(){
change.value = parseInt(amount_paid.value) - parseInt(total.value);
    
    if(parseInt(change.value) >= 0){
        submit.disabled = false;
        submit.style.backgroundColor = "green";
    }
    
    else{
        submit.disabled = true;
        submit.style.backgroundColor = "rgb(168, 16, 16)";
    }
})