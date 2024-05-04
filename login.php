<body>
<div class="container">
    <?php
    // بيانات الاتصال بقاعدة البيانات
    $servername = "localhost";
    $username = "اسم_المستخدم";
    $password = "كلمة_المرور";
    $dbname = "اسم_قاعدة_البيانات";

    // إنشاء اتصال
    $conn = new mysqli($servername, $username, $password, $dbname);

    // فحص الاتصال
    if ($conn->connect_error) {
        die("فشل الاتصال: " . $conn->connect_error);
    }

    // التحقق من طلب الدخول
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['login_username'];
        $password = $_POST['login_password'];

        // استعلام SQL للتحقق من بيانات تسجيل الدخول
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            // تسجيل الدخول ناجح
            echo "تسجيل الدخول ناجح!";
        } else {
            // فشل تسجيل الدخول
            echo "فشل تسجيل الدخول!";
        }
    }

    // إغلاق الاتصال
    $conn->close();
    ?>
    <div class="form-container" id="login-form-container">
        <h2>تسجيل الدخول</h2>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <input type="text" name="login_username" placeholder="اسم المستخدم" required>
            <input type="password" name="login_password" placeholder="كلمة المرور" required>
            <button type="submit">تسجيل الدخول</button>
        </form>
        <p>ليس لديك حساب؟ <a href="register.html">إنشاء حساب جديد</a></p>
    </div>
</div>
</body>
</html>