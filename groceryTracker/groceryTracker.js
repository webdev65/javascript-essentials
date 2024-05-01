let grocery1;
let grocery2;
let grocery3;

function total_amount(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    totalGroceryAmount = grocery1 + grocery2 + grocery3;

    document.getElementById('totalAmount').innerHTML=`The total amount is: $ ${totalGroceryAmount}`;
}