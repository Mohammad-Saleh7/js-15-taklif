// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
//1
const body = document.querySelector("body")
body.style.backgroundColor="#0a122d"
//2
const image =document.querySelector("img")
image.style.margin="4rem 0"
//3
image.style.borderRadius="1rem"
//4
const h1 =document.querySelector("h1")
const h5 =document.querySelector("h5")
const spans =document.querySelector(".circles span")
h1.style.top="85px"
h1.style.left="15px"
h5.style.top="115px"
h5.style.left="16px"

