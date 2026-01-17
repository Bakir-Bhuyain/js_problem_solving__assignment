//problem statement

function calculateMoney(totalTicket) {
  //validation remaining:-
  if (0 <= totalTicket) {
    const perTicket = 120;
    const forSecurityGuard = 500;
    const forStuffLunch = 50;
    const totalStuff = 8;
    const stuffCost = forStuffLunch * totalStuff + forSecurityGuard;
    const remainingCost = perTicket * totalTicket - stuffCost;
    return remainingCost;
  } else {
    return "Invalid Number: Please provide a positive number";
  }
}
const total = calculateMoney(-12);
console.log(total);
