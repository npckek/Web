document.getElementById('changeContentBtn').addEventListener('click', function() {
    document.getElementById('content').innerText = 'А вот и что-то произошло.';
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Client-side validation
    var username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('validationMessage').innerText = 'Please enter your name.';
        return;
    }

    // If validation passes, reset validation message
    document.getElementById('validationMessage').innerText = 'Упс... Теперь я знаю как вас зовут.';

    // Simulate sending data to server
    var formData = new FormData(this);
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log response from server
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
