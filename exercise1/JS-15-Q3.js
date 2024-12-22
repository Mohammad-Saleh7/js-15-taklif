// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
//1
const navbar = document.querySelector("ul.navbar")
//2
const navbarItem = ["Home", "Products", "Blog", "Contact us"];
navbarItem.forEach(item=>{
  //3
  const li = document.createElement("li")
  li.classList.add("item")
  li.innerText=item
  //4
  li.style.margin = '0 1rem';
  li.style.cursor = 'pointer';
  navbar.appendChild(li);
})
