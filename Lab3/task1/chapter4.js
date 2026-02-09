/**
 * Create an empty object user.
 * Add the property name with the value John.
 * Add the property surname with the value Smith.
 * Change the value of the name to Pete.
 * Remove the property name from the object.
 */
let user = {
    name: "John",
    surname: "Smith",
}
user.name = 'Pete';
delete user.name;


//2nd
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//3rd
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}
alert(sum);

//4th
function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name );

  function makeUser(){
  return this; 
}

alert( makeUser().name );

function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name );

  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  et ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();

  ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0

  let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); 

function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);