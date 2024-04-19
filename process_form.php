<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    
    // Process data (e.g., save to database, etc.)
    
    // Return a response
    echo "Hello, $username! Your data has been received on the server.";
}
?>
