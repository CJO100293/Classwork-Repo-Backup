// An array of objects, representing a cartoon family
let simpsons = [{
  name: "Homer",
  age: 45
}, {
  name: "Lisa",
  age: 8
}, {
  name: "Marge",
  age: 43
}, {
  name: "Bart",
  age: 10
}, {
  name: "Maggie",
  age: 1
}];

// Create a custom filtering function
function selectYounger(person) {
  console.log(`Now processing ${person.name}...`)
  console.log(`Age ${person.age}`)
  console.log(`True or False: ${person.age < 30}`)
  return person.age < 30;
}

// filter() uses the custom function as its argument
let youngSimpsons = simpsons.filter(selectYounger);

// Print to console
console.log(youngSimpsons);
