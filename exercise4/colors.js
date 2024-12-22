/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/

const circleOne=document.querySelector(".one")
const circleTwo=document.querySelector(".two")
const circleThree=document.querySelector(".three")
const circleFour=document.querySelector(".four")
const circleFive=document.querySelector(".five")
const circleSix=document.querySelector(".six")
const circleSeven=document.querySelector(".seven")
const boxes=document.querySelectorAll(".box")

function greenColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(31, 127, 102, ${alpha})`;
    });
}

function yellowColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(255, 200, 0, ${alpha})`;
    });
}

function orangeColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(255, 123, 0, ${alpha})`;
    });
}
function redColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(216, 1, 1, ${alpha})`;
    });
}
function pinkColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(223, 4, 70, ${alpha})`;
    });
}
function purpleColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(127, 31, 85, ${alpha})`;
    });
}
function violetColor() {
    boxes.forEach((boxes, index) => {
        const alpha = 1 - (index * 0.2);
        boxes.style.backgroundColor = `rgba(93, 18, 199, ${alpha})`;
    });
}
circleOne.addEventListener('click', greenColor);
circleTwo.addEventListener('click', yellowColor);
circleThree.addEventListener('click',orangeColor)
circleFour.addEventListener('click',redColor)
circleFive.addEventListener('click',pinkColor)
circleSix.addEventListener('click',purpleColor)
circleSeven.addEventListener('click',violetColor)
