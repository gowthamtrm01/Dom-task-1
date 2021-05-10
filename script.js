// Adding container <div> to the dom
const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.append(container);

// adding heading  <h2> to the container
const heading = document.createElement('h2');
heading.innerText = 'DOM Manipulation with Form';
heading.setAttribute('class', 'heading')
container.appendChild(heading);

//Submitting form or On click Submit
const onSubmit = (e) => {
    e.preventDefault();
    const info = {};

    //getting the first name value and set to object key to the first name
    const firstName = document.getElementById('firstName');
    info['firstName'] = firstName.value;
    
    //getting the last name value and set to object key to the last name
    const lastName = document.getElementById('lastName');
    info['lastName'] = lastName.value;
    
    //getting the address value and set to object key to the address
    const addressValue = document.getElementById('address');
    info['address'] = addressValue.value;
    
    //getting the pincode value and set to object key to the pincode
    const pincodeValue = document.getElementById('pincode');
    info['pincode'] = pincodeValue.value;
    
    //getting the gender value and set to object key to the gender 
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    if(male.checked) {
        info['gender'] = 'Male';
    } else if(female.checked) {
        info['gender'] = 'Female';
    } else {

    }
    
    //for multiple select choice that store in array variable in choice 
    const foodValue = document.getElementById('choiceOfFood');
    const choices = [];
    for(let i=0; i<foodValue.length; i++) {
        const option = foodValue[i];
        if(option.selected) {
            choices.push(option.value);
        }
    }

    const alertcal = document.getElementById('alert');
 
    //checking the choice length is  greater than two or not
    if(choices.length >= 2) {
        info['choiceOfFood'] = choices.join(', ');
        alertcal.innerHTML = '';
    } else {
        alertcal.innerHTML = 'Please select atleast two food choices';
        alert.setAttribute('class', 'alert')
        return ;
    }

    // after submiting form clearing all data form input
    firstName.value = '';
    lastName.value = '';
    addressValue.value = '';
    pincodeValue.value = '';
    male.checked = false;
    female.checked = false;
    foodValue.value = '';

    //getting the state value and set to object key to the state and clearing the data after submitting form
    const stateValue = document.getElementById('state');
    info['state'] = stateValue.value;
    stateValue.value = '';

    //getting the country value and set to object key to the country and clearing the data after submitting form
    const countryValue = document.getElementById('country');
    info['country'] = countryValue.value;
    countryValue.value = '';

    //Adding the data to the table
    const tableRow = document.createElement('tr');
    
    Object.values(info).forEach((value) => {
        const tableData = document.createElement('td');
        tableData.innerText = value;
        tableData.setAttribute('class', 'borderl');
        tableRow.appendChild(tableData);
    })

    const tBody = document.getElementById('table-body');
    tBody.appendChild(tableRow);
}

//creating form and adding to cotainer, declared the Onsubmit
const form = document.createElement('form');
form.addEventListener('submit', onSubmit);
container.appendChild(form);

//creating firstname  label, set the inner text, setting the class for css and adding to form
const firstNameLabel = document.createElement('label');
firstNameLabel.innerText = 'First name';
firstNameLabel.setAttribute('class', 'label');
form.appendChild(firstNameLabel);

//creating firstname  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const firstNameInput = document.createElement('input');
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('class', 'input');
firstNameInput.setAttribute('required', true);
firstNameInput.setAttribute('id', 'firstName');
form.appendChild(firstNameInput);

//creating breaktag  to break line to render from next line and adding to form
const breaktag = document.createElement('br');
form.appendChild(breaktag);

//creating lastname  label, set the inner text, setting the class for css and adding to form
const lastNameLabel = document.createElement('label');
lastNameLabel.innerText = 'Last name';
lastNameLabel.setAttribute('class', 'label');
form.appendChild(lastNameLabel);

//creating lastname  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const lastNameInput = document.createElement('input');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('class', 'input');
lastNameInput.setAttribute('required', true);
lastNameInput.setAttribute('id', 'lastName');
form.appendChild(lastNameInput);

//creating breaktag  to break line to render from next line and adding to form
const breaktag1 = document.createElement('br');
form.appendChild(breaktag1);

//creating address  label, set the inner text, setting the class for css and adding to form
const addressLabel = document.createElement('label');
addressLabel.innerText = 'Address';
addressLabel.setAttribute('class', 'label choice');
form.appendChild(addressLabel);

//creating lastname  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const addressInput = document.createElement('textarea');
addressInput.setAttribute('class', 'input address choice');
addressInput.setAttribute('required', true);
addressInput.setAttribute('id', 'address');
form.appendChild(addressInput);

//creating breaktag  to break line to render from next line and adding to form
const breaktag2 = document.createElement('br');
form.appendChild(breaktag2);
const breaktag3 = document.createElement('br');
form.appendChild(breaktag3);

//creating pincode  label, set the inner text, setting the class for css and adding to form
const pincodeLabel = document.createElement('label');
pincodeLabel.innerText = 'Pincode';
pincodeLabel.setAttribute('class', 'label');
form.appendChild(pincodeLabel);

//creating pincode  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const pincodeInput = document.createElement('input');
pincodeInput.setAttribute('type', 'number');
pincodeInput.setAttribute('class', 'input');
pincodeInput.setAttribute('required', true);
pincodeInput.setAttribute('id', 'pincode');
form.appendChild(pincodeInput);

//creating breaktag  to break line to render from next line and adding to form
const breaktag4 = document.createElement('br');
form.appendChild(breaktag4);

//creating gender  label, set the inner text, setting the class for css and adding to form
const genderLabel = document.createElement('label');
genderLabel.innerText = 'Gender';
genderLabel.setAttribute('class', 'label');
form.appendChild(genderLabel);

//creating male  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const maleInput = document.createElement('input');
maleInput.setAttribute('type', 'radio');
maleInput.setAttribute('id', 'male');
maleInput.setAttribute('name', 'gender');
maleInput.setAttribute('value', 'male');
maleInput.setAttribute('required', true);
maleInput.setAttribute('id', 'male');
form.appendChild(maleInput);

//creating male  label, set the inner text, setting the class for css and adding to form
const maleLabel = document.createElement('label');
maleLabel.innerText = 'Male';
maleLabel.setAttribute('class', 'radio');
maleLabel.setAttribute('for', 'male');
form.appendChild(maleLabel);

//creating female  input tag, set inner text, setting the class for css, enable the validator,setting  the value, 
    // setting the id for on submit function and adding to form
const femaleInput = document.createElement('input');
femaleInput.setAttribute('type', 'radio');
femaleInput.setAttribute('id', 'female');
femaleInput.setAttribute('name', 'gender');
femaleInput.setAttribute('value', 'female');
femaleInput.setAttribute('required', true);
femaleInput.setAttribute('id', 'female');
form.appendChild(femaleInput);

//creating female  label, set the inner text, setting the class for css and adding to form
const femaleLabel = document.createElement('label');
femaleLabel.innerText = 'Female';
femaleLabel.setAttribute('class', 'radio');
femaleLabel.setAttribute('for', 'female');
form.appendChild(femaleLabel);

//creating breaktag  to break line to render from next line and adding to form
const breaktag5 = document.createElement('br');
form.appendChild(breaktag5);

//creating food  label, set the inner text, setting the class for css and adding to form
const foodLabel = document.createElement('label');
foodLabel.innerText = 'Choice of food';
foodLabel.setAttribute('class', 'label choice');
form.appendChild(foodLabel);

////creating select tag, setting the class for css, enable validator and adding to form
const select = document.createElement('select');
select.multiple = true;
select.setAttribute('class', 'choice');
select.setAttribute('required', true);
select.setAttribute('id', 'choiceOfFood');
form.appendChild(select);

//creating the option tag, setting the innner text, setting  the value and adding option to the select
const option1 = document.createElement('option');
option1.innerText = 'Briyani';
option1.setAttribute('value', 'briyani');
select.appendChild(option1);
const option2 = document.createElement('option');
option2.innerText = 'Pizza';
option2.setAttribute('value', 'pizza');
select.appendChild(option2);
const option3 = document.createElement('option');
option3.innerText = 'Burger';
option3.setAttribute('value', 'burger');
select.appendChild(option3);
const option4 = document.createElement('option');
option4.innerText = 'Shavarma';
option4.setAttribute('value', 'shavarma');
select.appendChild(option4);
const option5 = document.createElement('option');
option5.innerText = 'Grilled Chicken';
option5.setAttribute('value', 'grilled chicken');
select.appendChild(option5);

//creating h6 tag, adding id for subnmit function and adding alert to form
const alert = document.createElement('h6');
alert.setAttribute('id', 'alert');
form.appendChild(alert);

//creating breaktag  to break line to render from next line and adding to form
const breaktag7 = document.createElement('br');
form.appendChild(breaktag7);

//creating state  label, set the inner text, setting the class for css and adding to form
const stateLabel = document.createElement('label');
stateLabel.innerText = 'State';
stateLabel.setAttribute('class', 'label');
form.appendChild(stateLabel);

//creating male  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const stateInput = document.createElement('input');
stateInput.setAttribute('type', 'text');
stateInput.setAttribute('class', 'input');
stateInput.setAttribute('required', true);
stateInput.setAttribute('id', 'state');
form.appendChild(stateInput);

//creating breaktag  to break line to render from next line and adding to form
const breaktag8 = document.createElement('br');
form.appendChild(breaktag8);

//creating country  label, set the inner text, setting the class for css and adding to form
const countryLabel = document.createElement('label');
countryLabel.innerText = 'Country';
countryLabel.setAttribute('class', 'label');
form.appendChild(countryLabel);

//creating male  input tag, set inner text, setting the class for css, enable the validator, 
    // setting the id for on submit function and adding to form
const countryInput = document.createElement('input');
countryInput.setAttribute('type', 'text');
countryInput.setAttribute('class', 'input');
countryInput.setAttribute('required', true);
countryInput.setAttribute('id', 'country');
form.appendChild(countryInput);

//creating breaktag  to break line to render from next line and adding to form
const breaktag9 = document.createElement('br');
form.appendChild(breaktag9);

// creating submit input tag, setting the type, setting the value,setting the class for css,
    //adding submit to form
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Submit');
submit.setAttribute('class', 'btn btn-success button');
form.appendChild(submit);

//creating breaktag  to break line to render from next line and adding to form
const breaktag10 = document.createElement('br');
form.appendChild(breaktag10);
const breaktag11 = document.createElement('br');
form.appendChild(breaktag11);

//creating table tag and adding row to cotainer
const row = document.createElement('table');
container.appendChild(row);

//creating table head tag and adding tablehead to row
const tablehead = document.createElement('thead');
row.appendChild(tablehead);

//create firstname <th> tag , set inner text, set the class for css and adding firstname to table head
const firstNameTable = document.createElement('th');
firstNameTable.innerText = 'First Name';
firstNameTable.setAttribute('class', 'borderl');
tablehead.appendChild(firstNameTable);

//create lastname <th> tag , set inner text, set the class for css and adding lastname to table head
const lastNameTable = document.createElement('th');
lastNameTable.innerText = 'Last Name';
lastNameTable.setAttribute('class', 'borderl');
tablehead.appendChild(lastNameTable);

//create address <th> tag , set inner text, set the class for css and adding address to table head
const addressTable = document.createElement('th');
addressTable.innerText = 'Address';
addressTable.setAttribute('class', 'borderl');
tablehead.appendChild(addressTable);

//create pincode <th> tag , set inner text, set the class for css and adding pincode to table head
const pincodeTable = document.createElement('th');
pincodeTable.innerText = 'Pincode';
pincodeTable.setAttribute('class', 'borderl');
tablehead.appendChild(pincodeTable);

//create gender <th> tag , set inner text, set the class for css and adding gender to table head
const genderTable = document.createElement('th');
genderTable.innerText = 'Gender';
genderTable.setAttribute('class', 'borderl');
tablehead.appendChild(genderTable);

//create choice of food <th> tag , set inner text, set the class for css and adding choice of food to table head
const choiceOfFoodTable = document.createElement('th');
choiceOfFoodTable.innerText = 'Choice of  food';
choiceOfFoodTable.setAttribute('class', 'borderl');
tablehead.appendChild(choiceOfFoodTable);

//create state <th> tag , set inner text, set the class for css and adding state to table head
const stateTable = document.createElement('th');
stateTable.innerText = 'State';
stateTable.setAttribute('class', 'borderl');
tablehead.appendChild(stateTable);

//create country <th> tag , set inner text, set the class for css and adding country to table head
const countryTable = document.createElement('th');
countryTable.innerText = 'Country';
countryTable.setAttribute('class', 'borderl');
tablehead.appendChild(countryTable);

//creating table body, set id for submit function and adding table body to row
const tablebody = document.createElement('tbody');
tablebody.setAttribute('id', 'table-body')
row.appendChild(tablebody);
