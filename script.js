let userObject = {};
let userInput = prompt("Please confirm your order by typing the following: vanilla, vanilla, vanilla, strawberry, coffee, coffee"); 
userObject.data = userInput;

const flavors = {
  vanilla: 3,
  strawberry: 1,
  coffee: 2,
}
console.table(userInput,flavors);
console.log(Object.entries(flavors));

for (const value in flavors) {
  console.log(`You've ordered ${flavors[value]} flavors of ${value}`)
}

function printObj(obj) {
  for (const variable in obj) {
    console.log("the key is: " + variable +" " + "and the value is " + obj[variable])
  }
}

printObj(flavors)

const vanilla = document.getElementById("1");
vanilla.textContent = flavors.vanilla

const strawberry = document.getElementById("2");
strawberry.textContent = flavors.strawberry

const coffee = document.getElementById("3");
coffee.textContent = flavors.coffee


