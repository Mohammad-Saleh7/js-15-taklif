// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

const printPersons = (persons)=>{
  const personList = document.querySelector(".personsList")
  persons.forEach(person=>{
    const newDiv =document.createElement('div')
    newDiv.innerText =`name: ${person.name}, age: ${person.age}`
    personList.appendChild(newDiv)
  })
}
printPersons(persons);