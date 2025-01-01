let purseMoney = 200000000;
let purseMoney2 = 200000000; // Initial amount in INR
let purseMoney3 = 200000000;
let purseMoney4 = 200000000;
let purseMoney5 = 200000000;
let purseMoney6 = 200000000;
function updatePurse() {
    const amountInput = document.getElementById("amount");
    const amountToSubtract = parseInt(amountInput.value);
    const messageDiv = document.getElementById("message");
    if (isNaN(amountToSubtract) || amountToSubtract <= 0) {
        messageDiv.textContent = "Please enter a valid amount.";
        return;
    }

    if (amountToSubtract > purseMoney) {
        messageDiv.textContent = "Insufficient funds!";
        return;
    }
   
    purseMoney -= amountToSubtract;
    document.getElementById("purseMoney1").textContent = purseMoney;
     messageDiv.textContent = `Successfully subtracted ${amountToSubtract} INR.`;
    amountInput.value = ""; // Clear input field first function end
}

function updatePurse2() {
    const amountInput2 = document.getElementById("amount2");
    const amountToSubtract2 = parseInt(amountInput2.value);
    const messageDiv2 = document.getElementById("message2");
    if (isNaN(amountToSubtract2) || amountToSubtract2 <= 0) {
        messageDiv2.textContent = "Please enter a valid amount.";
        return;
    }

    if (amountToSubtract2 > purseMoney2) {
        messageDiv2.textContent = "Insufficient funds!";
        return;
    }
   
    purseMoney2 -= amountToSubtract2;
    document.getElementById("purseMoney2").textContent = purseMoney2;
     messageDiv2.textContent = `Successfully subtracted ${amountToSubtract2} INR.`;
    amountInput2.value = ""; // Clear input field second function end
}


function updatePurse3() {
    const amountInput3 = document.getElementById("amount3");
    const amountToSubtract3 = parseInt(amountInput3.value);
    const messageDiv3 = document.getElementById("message3");
    if (isNaN(amountToSubtract3) || amountToSubtract3 <= 0) {
        messageDiv3.textContent = "Please enter a valid amount.";
        return;
    }

    if (amountToSubtract3 > purseMoney3) {
        messageDiv3.textContent = "Insufficient funds!";
        return;
    }
   
    purseMoney3 -= amountToSubtract3;
    document.getElementById("purseMoney3").textContent = purseMoney3;
     messageDiv3.textContent = `Successfully subtracted ${amountToSubtract3} INR.`;
    amountInput3.value = ""; // Clear input field 3 function end
}


function updatePurse4() {
    const amountInput4 = document.getElementById("amount4");
    const amountToSubtract4 = parseInt(amountInput4.value);
    const messageDiv4 = document.getElementById("message4");
    if (isNaN(amountToSubtract4) || amountToSubtract4 <= 0) {
        messageDiv4.textContent = "Please enter a valid amount.";
        return;
    }

    if (amountToSubtract4 > purseMoney4) {
        messageDiv4.textContent = "Insufficient funds!";
        return;
    }
   
    purseMoney4 -= amountToSubtract4;
    document.getElementById("purseMoney4").textContent = purseMoney4;
     messageDiv4.textContent = `Successfully subtracted ${amountToSubtract4} INR.`;
    amountInput4.value = ""; // Clear input field 4 function end
}


function updatePurse5() {
    const amountInput5 = document.getElementById("amount5");
    const amountToSubtract5 = parseInt(amountInput5.value);
    const messageDiv5 = document.getElementById("message5");
    if (isNaN(amountToSubtract5) || amountToSubtract5 <= 0) {
        messageDiv5.textContent = "Please enter a valid amount.";
        return;
    }

    if (amountToSubtract5 > purseMoney5) {
        messageDiv5.textContent = "Insufficient funds!";
        return;
    }
   
    purseMoney5 -= amountToSubtract5;
    document.getElementById("purseMoney5").textContent = purseMoney5;
     messageDiv5.textContent = `Successfully subtracted ${amountToSubtract5} INR.`;
    amountInput5.value = ""; // Clear input field 5 function end
}


function updatePurse6() {
    const amountInput6 = document.getElementById("amount6");
    const amountToSubtract6 = parseInt(amountInput6.value);
    const messageDiv6 = document.getElementById("message6");
    if (isNaN(amountToSubtract6) || amountToSubtract6 <= 0) {
        messageDiv6.textContent = "Please enter a valid amount.";
        return;
    }

    if (amountToSubtract6 > purseMoney2) {
        messageDiv6.textContent = "Insufficient funds!";
        return;
    }
   
    purseMoney6 -= amountToSubtract6;
    document.getElementById("purseMoney6").textContent = purseMoney6;
     messageDiv6.textContent = `Successfully subtracted ${amountToSubtract6} INR.`;
    amountInput6.value = ""; // Clear input field 6 function end
}
//up to this players list function start

