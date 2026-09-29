let contacts = [];

function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    contacts.push({
        name: name,
        phone: phone,
        email: email
    });

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    displayContacts();
}

function displayContacts(list = contacts) {
    let output = "";

    list.forEach(function(contact) {
        output += `
            <div class="contact">
                <h3>${contact.name}</h3>
                <p>Phone: ${contact.phone}</p>
                <p>Email: ${contact.email}</p>
            </div>
        `;
    });

    document.getElementById("contactList").innerHTML = output;
}

function searchContacts() {
    let search = document.getElementById("search").value.toLowerCase();

    let results = contacts.filter(function(contact) {
        return contact.name.toLowerCase().includes(search);
    });

    displayContacts(results);
}