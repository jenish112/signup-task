<?php 
header('Access-Control-Allow-Origin: *');
 
$servername = "localhost";
$username = "root";
$password = "";
$database = "dummy";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $conn->real_escape_string($_POST['name']);
$mobile = $conn->real_escape_string($_POST['mobile']);
$email = $conn->real_escape_string($_POST['email']);
$edu = $conn->real_escape_string($_POST['edu']);
$user = $conn->real_escape_string($_POST['user']);
$password = $conn->real_escape_string($_POST['password']);

$sql = "INSERT INTO reactusers (name, mobile, email, edu, user, password) VALUES ('$name', '$mobile', '$email', '$edu', '$user', '$password')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
