//INPUTS
// let principal = 53000;
// let interestRate = 7.625;
// let loanLength = 15;
//OUTPUTS
// let monthlyPayment;
// let totalInterestPaid;


function mortgageCalculator(principal, interestRate, loanLength){
    loanLength = loanLength * 12;
    interestRate = (interestRate / 100)  / 12;
    let monthlyPayment = (principal * (interestRate * (1 + interestRate) ** loanLength)) / ((1 + interestRate) ** loanLength - 1);
    return monthlyPayment.toFixed(2);
}

// console.log(mortgageCalculator())



function compoundCalculator(deposit, compoundInterest, years) {
    compoundInterest = compoundInterest / 100;
    years;
    let futureValue = deposit * (1 + compoundInterest / 12) ** (12 * 5);
    return futureValue.toFixed(2);
}

console.log(compoundCaclulator(1000, 1.75, 5));