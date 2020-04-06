
function convertUTD(){
    var amount = document.getElementById('amount').value;
    total = amount * 10.30;
    var show = document.getElementById('show');
    if(isNaN(amount)){
        alert("This field accepte only the number");
    }
    else{
        show.innerHTML = amount + "$ =>" + total + "MAD"; 
    }
}

function convertDTU(){
    var amount = document.getElementById('amount').value;
    total = amount * 0.097;

    var show = document.getElementById('show');
    if(isNaN(amount)){
        alert("This field accepte only the number");
    }
    else{
        show.innerHTML = amount + "MAD =>" + total + "$";
    }
}

function convertETD(){
    var amount = document.getElementById('amount').value;
    total = amount * 11.12;

    var show = document.getElementById('show');
    if(isNaN(amount)){
        alert("This field accepte only the number");
    }
    else{
        show.innerHTML = amount + "£ =>" + total + "MAD"; 
    }
}

function convertDTE(){
    var amount = document.getElementById('amount').value;
    total = amount * 0.90;

    var show = document.getElementById('show');
    if(isNaN(amount)){
        alert("This field accepte only the number");
    }
    else{
        show.innerHTML = amount + "MAD =>" + total + "£";
    }
}

