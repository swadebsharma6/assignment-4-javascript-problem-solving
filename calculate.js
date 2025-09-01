
function calculateTax(income, expense){
      if(income < expense){
            return 'Invalid Input'
      }

      const deference = income - expense;
      const tax = deference * .20;
      return tax;
}

const income = 6000;
const expense = -1500;