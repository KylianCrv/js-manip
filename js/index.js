const firstName = document.querySelector("#first_name")
const lastName = document.querySelector("#last_name")
const email = document.querySelector("#email")
const phoneNumber = document.querySelector("#phone_number")
const country = document.querySelector("#country")
const submitButton = document.querySelector('#submit_button')
const usersTableBody = document.querySelector('#users_list') 

let elements = [lastName, firstName, email, country, phoneNumber]

submitButton.addEventListener('click',function(event){
    event.preventDefault();

    const row = document.createElement('tr');

    elements.forEach(element =>{
        const column = createColumn(element.value)
        row.append(column)
    })

        usersTableBody.appendChild(row);
})

function createColumn(textContent){
    const column = document.createElement("td");
    column.innerText = textContent;
    return column;
}