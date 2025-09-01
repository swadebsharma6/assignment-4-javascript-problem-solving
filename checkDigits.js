

function checkDigitsInName(name){
      if(typeof name !== 'string'){
            return 'Please Provide a valid name';
      }

      else if(/[0-9]/.test(name)){
            return true
      }
            
    else{
      return false;
    }
}

const name = ["Raj"]

const checkDigits = checkDigitsInName(name);
console.log('Check Digits:', checkDigits);