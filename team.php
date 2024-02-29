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

$team_name = $conn->real_escape_string($_POST['team_name']);
$team_mobile = $conn->real_escape_string($_POST['team_mobile']);
$team_email = $conn->real_escape_string($_POST['team_email']);
$team_edu = $conn->real_escape_string($_POST['team_edu']);
$team_user = $conn->real_escape_string($_POST['team_user']);
$team_password = $conn->real_escape_string($_POST['team_password']);

$sql = "INSERT INTO teams (team_name, team_mobile, team_email, team_edu, team_user, team_password) VALUES ('$team_name', '$team_mobile', '$team_email', '$team_edu', '$team_user', '$team_password')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
