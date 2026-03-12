<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$statusFile = 'status.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // open=1 or open=0
    $open = isset($_POST['open']) && $_POST['open'] == '1';
    file_put_contents($statusFile, $open ? '1' : '0');
    echo json_encode(['open' => $open]);
    exit;
}

// GET: return current status
if (!file_exists($statusFile)) {
    file_put_contents($statusFile, '0');
}

$open = trim(file_get_contents($statusFile)) === '1';
echo json_encode(['open' => $open]);
?>
