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

    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch user data based on email
    $sql = "SELECT userId, userName, userPwd FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['userPwd'])) {
            // Start a session and store user data if login is successful
            session_start();
            $_SESSION['user_id'] = $row['userId']; // Use 'userId' instead of 'id'
            $_SESSION['username'] = $row['userName']; // Use 'userName' instead of 'username'
    
            // Redirect the user after successful login
            header("Location: ../dashboard.php"); // Change the URL accordingly
            exit();
        } else {
            header("Location: ../signin.html?error=invalidpassword");
            exit();
        }
    } else {
        header("Location: ../signin.html?error=usernotfound");
        exit();
    }
} else {
    header("Location: ../signin.html"); // Redirect if form is not submitted
    exit();
}
?>