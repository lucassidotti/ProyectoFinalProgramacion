<?php

//guardo los valores del post(inputs) en variables
$nombre = $_POST['nombre'];
$tel = $_POST['telefono'];
$mail = $_POST['mail'];
$pass = $_POST['passReg'];
$fecha_nac = $_POST['fechaNac'];

//datos del host y la DB
$host = "localhost"; 
$user = "root";      
$passDB = "";        
$db = "adotti_hardware"; 

//Establece la conexion con sql
$conexion = new mysqli($host, $user, $passDB, $db);

//Setea por las dudas el cotejamiento
$conexion->set_charset("utf8mb4");

?>

<!-- Este html es necesario  para hacer la validacion del formulario
 Js se encarga de la validacion basica pero las condiciones de salida y el submit me trabaron el envio de datos a la DB
 Supongo que se puede hacer de otra manera pero esta es la mas facil que encontre por ahora
 Entonces lo que hace este codigo es verificar antes del envio, si el mail ya esta usado en la DB
 porque es un campo con 'unique'
 Despues de eso si todos los campos estan bien, y el mail no esta duplicado hace submit a la tabla clientes-->
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

//Cierra la conexion con la DB
$conexion->close();
?>
</body>
</html>