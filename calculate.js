
function calculateTax(income, expense){
      if(income < expense){
            return 'Invalid Input'
      }

      const deference = income - expense;
      const tax = deference * .20;
      return tax;
}

const income = 5000;
const expense = 1500;


const tax = calculateTax(income, expense);
console.log('tax:', tax);