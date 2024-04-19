document.getElementById('changeContentBtn').addEventListener('click', function() {
    document.getElementById('content').innerText = 'А вот и что-то произошло.';
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    if (username.trim() === '') {
        document.getElementById('validationMessage').innerText = 'Please enter your name.';
        return;
    }

    document.getElementById('validationMessage').innerText = 'Упс... Теперь я знаю как вас зовут.';

    var formData = new FormData(this);
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
