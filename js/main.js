const fivePorcent = document.getElementById("five-porcent");
const tenPorcent = document.getElementById("ten-porcent");
const fifteenPorcent = document.getElementById("fifteen-porcent");
const twentyFivePorcent = document.getElementById("twenty-five-porcent");
const fiftyPorcent = document.getElementById("fifty-porcent");
let totalPerson = document.getElementById("total-person");
let tipAmount = document.getElementById("tip-amount");
let inputCustom = document.getElementById("input-custom");
let resetButton = document.getElementById("reset");


resetButton.addEventListener("click", ()=>{
    document.getElementById("inputAmount").value = 0;
    document.getElementById("input-people").value = 1;
    tipAmount.innerText = "0.00";
    totalPerson.innerText = "0.00";
    
})


fivePorcent.addEventListener("click", ()=>{
    let inputAmount = parseFloat(document.getElementById("inputAmount").value);
    let inputPeople = parseFloat(document.getElementById("input-people").value);
    let total5 = parseFloat(inputAmount * 0.05);
    tipAmount.innerText = `$${parseFloat( (total5 / inputPeople)).toFixed(2)}`;
    totalPerson.innerText = `$${ parseFloat((total5 + inputAmount) / inputPeople).toFixed(2)}`;

});

tenPorcent.addEventListener("click", ()=>{
    let inputAmount = parseFloat(document.getElementById("inputAmount").value);
    let inputPeople = parseFloat(document.getElementById("input-people").value);
    let total5 = parseFloat(inputAmount * 0.1);
    tipAmount.innerText = `$${parseFloat( (total5 / inputPeople)).toFixed(2)}`;
    totalPerson.innerText = `$${ parseFloat((total5 + inputAmount) / inputPeople).toFixed(2)}`;
});

fifteenPorcent.addEventListener("click", ()=>{
    let inputAmount = parseFloat(document.getElementById("inputAmount").value);
    let inputPeople = parseFloat(document.getElementById("input-people").value);
    let total5 = parseFloat(inputAmount * 0.15);
    tipAmount.innerText = `$${parseFloat( (total5 / inputPeople)).toFixed(2)}`;
    totalPerson.innerText = `$${ parseFloat((total5 + inputAmount) / inputPeople).toFixed(2)}`;

});

twentyFivePorcent.addEventListener("click", ()=>{
    let inputAmount = parseFloat(document.getElementById("inputAmount").value);
    let inputPeople = parseFloat(document.getElementById("input-people").value);
    let total5 = parseFloat(inputAmount * 0.25);
    tipAmount.innerText = `$${parseFloat( (total5 / inputPeople)).toFixed(2)}`;
    totalPerson.innerText = `$${ parseFloat((total5 + inputAmount) / inputPeople).toFixed(2)}`;

});

fiftyPorcent.addEventListener("click", ()=>{
    let inputAmount = parseFloat(document.getElementById("inputAmount").value);
    let inputPeople = parseFloat(document.getElementById("input-people").value);
    let total5 = parseFloat(inputAmount * 0.5);
    tipAmount.innerText = `$${parseFloat( (total5 / inputPeople)).toFixed(2)}`;
    totalPerson.innerText = `$${ parseFloat((total5 + inputAmount) / inputPeople).toFixed(2)}`;

});

inputCustom.addEventListener("input", ()=>{
    let asd = document.getElementById("input-custom").value;
    let inputAmount = parseFloat(document.getElementById("inputAmount").value);
    let total5 = parseFloat(inputAmount * (asd / 100));
    let inputPeople = parseFloat(document.getElementById("input-people").value);
    tipAmount.innerText = `$${parseFloat( (total5 / inputPeople)).toFixed(2)}`;
    totalPerson.innerText = `$${ parseFloat((total5 + inputAmount) / inputPeople).toFixed(2)}`;

})