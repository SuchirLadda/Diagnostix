<?php

if (isset($_POST['submit'])) {
    $servername = "localhost"; // Replace with your database server name
    $username = "root"; // Replace with your database username
    $password = ""; // Replace with your database password
    $dbname = "nulifeloginsystem"; // Replace with your database name

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Perform input validation here (e.g., check if fields are not empty, validate email format, etc.)

    // Insert user data into the database using a prepared statement
    $sql = "INSERT INTO users (userName, email, userPwd) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        // Redirect the user after successful registration
        header("Location: ../signup_success.html"); // Change the URL accordingly
        exit();
    } else {
        header("Location: ../signup.html?error=registrationfailed");
        exit();
    }
} else {
    header("Location: ../signup.html"); // Redirect if form is not submitted
    exit();
}
?>
