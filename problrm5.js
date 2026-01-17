function monthlySavings(arr, livingCost){
      if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
      }
      let totalIncome = 0;
      for(let i=0; i < arr.length; i++){
            let payment = arr[i];
            // console.log(payment);
            if(payment >= 3000){
                  let tax = 3000 * 0.2;
                  totalIncome = (totalIncome + (payment - tax));
            }else{
                  totalIncome = totalIncome+payment;
            }
      }
      let savings = totalIncome - livingCost;;
      if(savings => 0){
            return savings;
      }else{
            return "earn more";
      } 
}
const income = monthlySavings([1000, 2000, 2500], 5000);
console.log(income);