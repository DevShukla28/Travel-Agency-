/** @format */

console.log("this is project 4");
const Name = document.getElementById("Name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
let validEmail = false;
let validcontact = false;
let validuser = false;

Name.addEventListener("blur", () => {
  console.log("Name is blured");

  //validate name here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}/;
  let str = Name.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("name is valid");
    Name.classList.remove("is-invalid");
    validuser = true;
  } else {
    console.log("name is in-valid");
    Name.classList.add("is-invalid");
    validuser = false;
  }
});

Email.addEventListener("blur", () => {
  console.log("email is blured");

  //validate email here

  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]+){2,9}/;
  let str = Email.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("email is valid");
    Email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("email is in-valid");
    Email.classList.add("is-invalid");
    validuser = false;
  }
});

contact.addEventListener("blur", () => {
  console.log("contact is blured");

  // validate contact here
  let regex = /^([0-9]){10}/;
  let str = contact.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("contact is valid");
    contact.classList.remove("is-invalid");
    validcontact = true;
  } else {
    console.log("conatct is in-valid");
    contact.classList.add("is-invalid");
    validuser = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("you clicked on submit");
  //submit your form here

  if (validEmail && validcontact && validuser) {
    let failure = document.getElementById("failure");

    console.log("contact , email and user are valid, submitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    failure.classList.remove("show");
  } else {
    console.log(
      "one of contact, user and email are not valid, unable to submit the form"
    );
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    success.classList.remove("show");
  }
});
