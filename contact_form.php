<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    echo "<p>تم استقبال البيانات بنجاح:</p>";
    echo "<p>الاسم: $name</p>";
    echo "<p>البريد الإلكتروني: $email</p>";
    echo "<p>الرسالة: $message</p>";
}
?>

