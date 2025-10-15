<?php

$nombre = $_POST['nombre'];
$tel = $_POST['telefono'];
$mail = $_POST['mail'];
$pass = $_POST['passReg'];
$fecha_nac = $_POST['fechaNac'];


$host = "localhost"; 
$user = "root";      
$passDB = "";        
$db = "adotti_hardware"; 

$conexion = new mysqli($host, $user, $passDB, $db);
$conexion->set_charset("utf8mb4");

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="css/css.css">
</head>
<body>
<?php
$check_mail = mysqli_query($conexion, "SELECT * FROM clientes WHERE mail='$mail'");
if(mysqli_num_rows($check_mail)>0){
    echo '<script>
        Swal.fire({
            title: "Error",
            text: "Mail ya usado anteriormente. Intenta nuevamente",
            icon: "error",
            confirmButtonText: "Volver al registro"
        }).then(() => { window.history.back(); });
    </script>';
    exit;
}
$sql = "INSERT INTO clientes (nombre, telefono, mail, pass_reg, fecha_nac) VALUES ('$nombre', '$tel', '$mail', '$pass', '$fecha_nac')";

if($conexion->query($sql) === true){
    echo '<script>
        Swal.fire({
            title: "¡Bienvenido!",
            text: "Registro exitoso",
            icon: "success",
            confirmButtonText: "Ir al sitio"
        }).then(() => { window.location.href = "index.html"; });
    </script>';
    exit;
} 

$conexion->close();
?>
</body>
</html>
