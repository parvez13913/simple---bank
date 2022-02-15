// get the amount diposited...
document.getElementById("diposit-btn").addEventListener('click',function(){
    const inputFild = document.getElementById("amount-fild");
    const dipositAmount = inputFild.value;
    const currentDipositAmount = parseFloat(dipositAmount);

    const dipositFild = document.getElementById("diposit-amount");
    const dipositFildText = dipositFild.innerText;
    const newDipositAmount = parseFloat(dipositFildText);
    const totalDiposit = currentDipositAmount + newDipositAmount;
    dipositFild.innerText = totalDiposit;
    inputFild.value = "";
    const balanceFild = document.getElementById("tital-balance");
    const balanceAmount = balanceFild.innerText;
    const totalBalancrAmount = parseFloat(balanceAmount);
    const newBalanceTotal = totalBalancrAmount + currentDipositAmount;
    balanceFild.innerText = newBalanceTotal;
});

document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-fild");
    const withdrawFild = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawFild);

    const newWithdrawAmount = document.getElementById("withdrw-fild");
    const withdrawText = newWithdrawAmount.innerText;
    const withdrawTotal = parseFloat(withdrawText);
    const totalWithdrawAmount = withdrawAmount + withdrawTotal;
    newWithdrawAmount.innerText = totalWithdrawAmount;
    withdrawInput.value = "";
    // blance fild......
    const balanceFild = document.getElementById("tital-balance");
    const balanceText = balanceFild.innerText;
    const balanceAmount = parseFloat(balanceText);
    const totalBalancrAmount = balanceAmount - withdrawAmount;
    balanceFild.innerText = totalBalancrAmount;
});