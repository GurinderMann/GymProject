document.getElementById("einheitenBtn").addEventListener("click", function() {
    var dropdown = document.getElementById("einheitenDropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

document.getElementById("loginBtn").addEventListener("click", function() {
    var username = prompt("Bitte geben Sie Ihren Benutzernamen ein:");
    var password = prompt("Bitte geben Sie Ihr Passwort ein:");
    var user = {
        username: username,
        password: password
    };

    // Hier fügen wir den Benutzer zur JSON-Datei hinzu
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            data.users.push(user);
            return data;
        })
        .then(data => {
            fetch('users.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        });
});
