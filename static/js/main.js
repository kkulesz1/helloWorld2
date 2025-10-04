// Create change text button
let btn1 = document.getElementById("changeText");
let p = document.getElementById("changeMe");
// Change text upon click
btn1.onclick = function () {
    p.textContent = "Let's get started!";
};
// Create the name input
let NameForm = document.getElementById("nameForm");
let NameInput = document.getElementById("nameInput");
let GreetOutput = document.getElementById("greetOutput");
// Process the name button as a "submit" type
NameForm.addEventListener("submit", (e) => {
  e.preventDefault();   // stop the page from refreshing
  let name = NameInput.value.trim();    // removes any spaces
  GreetOutput.textContent = name ? `Hello, ${name}!` : "Please enter your name.";
});
// Create foods list
let foods = ["Tacos", "Ramen", "Chicken Parm", "Yogurt Bowl", "Strawberries"];
let list = document.getElementById("foodsList");
// Loop through list and create new list item with each food
for (let i=0; i<foods.length; i++) {
    let li = document.createElement("li");
    li.textContent = foods[i];
    list.appendChild(li);
}
// Add "help" popover from bootstrap
let popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
popovers.forEach(el => {
  // 'focus' trigger = opens on click/keyboard focus, closes on blur
  new bootstrap.Popover(el, { trigger: 'focus' });
});
// Take in user input from check boxes
function chooseCourses() {
    let checkboxes = document.querySelectorAll('input[name="courses"]');
    let selectedCourses = "";   // leave empty until selection is found
    for (let i=0; i<checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        if (checkbox.checked) {
            selectedCourses = selectedCourses + " " + checkbox.value;
        }
    }
    // Alert box functionality
    if (selectedCourses === "") {
        alert("No courses selected.");  // Print nothing if no courses selected.
    } else {
        alert("You have taken:" + selectedCourses);
    }
}
// Run courses function if submit button is clicked
let btn2 = document.getElementById("coursesSubmit");
if(btn2) btn2.addEventListener("click", chooseCourses);