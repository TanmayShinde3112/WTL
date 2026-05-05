<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "bt3";
$port = 3307;

$conn = new mysqli($servername, $username, $password, $dbName, $port);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);
$action = $data['action'] ?? '';

if ($action === 'insert') {
    $name = trim($data['student_name'] ?? '');
    $marks = trim($data['student_marks'] ?? '');

    if ($name === '' || $marks === '' || !is_numeric($marks)) {
        echo "Invalid input for insert.";
        exit();
    }

    $marks = intval($marks);

    $stmt = $conn->prepare("INSERT INTO student (name, marks) VALUES (?, ?)");
    $stmt->bind_param("si", $name, $marks);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        echo "Data inserted successfully.";
        exit();
    } else {
        $error = $stmt->error;
        $stmt->close();
        $conn->close();
        echo "Error inserting data: " . $error;
        exit();
    }
}

if ($action === 'display') {
    $result_arr = [];
    $stmt = $conn->prepare("SELECT id, name, marks FROM student");
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        while ($row = $result->fetch_assoc()) {
            $result_arr[] = $row;
        }
        $stmt->close();
        $conn->close();
        echo json_encode(['data' => $result_arr]);
        exit();
    } else {
        $error = $stmt->error;
        $stmt->close();
        $conn->close();
        echo json_encode(['error' => $error]);
        exit();
    }
}

if ($action === 'edit') {
    $id = intval($data['student_id'] ?? 0);
    $name = trim($data['student_name'] ?? '');
    $marks = trim($data['student_marks'] ?? '');

    if ($id <= 0 || $name === '' || $marks === '' || !is_numeric($marks)) {
        echo "Invalid input for update.";
        exit();
    }

    $marks = intval($marks);

    $stmt = $conn->prepare("UPDATE student SET name = ?, marks = ? WHERE id = ?");
    $stmt->bind_param("sii", $name, $marks, $id);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        echo "Data updated successfully.";
        exit();
    } else {
        $error = $stmt->error;
        $stmt->close();
        $conn->close();
        echo "Error updating data: " . $error;
        exit();
    }
}

if ($action === 'delete') {
    $id = intval($data['student_id'] ?? 0);

    if ($id <= 0) {
        echo "Invalid ID for delete.";
        exit();
    }

    $stmt = $conn->prepare("DELETE FROM student WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        echo "Data deleted successfully.";
        exit();
    } else {
        $error = $stmt->error;
        $stmt->close();
        $conn->close();
        echo "Error deleting data: " . $error;
        exit();
    }
}

$conn->close();
echo json_encode(["error" => "Invalid action."]);
exit();
?>
