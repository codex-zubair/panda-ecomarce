
// H2 Heading Lime Blue now
const h2 = document.getElementsByTagName('h2')
for (element of h2) {
    element.style.color = 'lightblue'
}


// Back back section will Tomato by using id
const backpackSection = document.getElementById('backpack')
backpackSection.style.backgroundColor = 'tomato'




// card Section find by id and make border radius 30 px
const cardClass = document.getElementsByClassName('card')

// looping for getting class.
for (element of cardClass) {
    element.style.borderRadius = '30px'
}



// Adding Submit button alert...
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', () => {
    console.log("Pressed Submit Button");
    alert("Pressed Submit button");
})


// Removing div file by clicking by now...
const buyNow = document.getElementsByClassName('button')
for (btn of buyNow) {
    btn.addEventListener('click', (event) => {

        const node = event.target.parentNode.parentNode.parentNode;
        node.remove();
    })
}



// Disable button attribute Removed...
const inputField = document.getElementById('input-field')
// adding input field function
inputField.addEventListener('keyup',()=>{
    if(inputField.value == 'email')
    {
        submit.removeAttribute('disabled')
    }
})



// Changing image.
