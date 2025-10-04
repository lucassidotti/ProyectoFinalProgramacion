<?php

error_reporting(E_ALL);
ini_set('display_errors',1);

//Inicia la session
session_start();

//guardo los valores del post(inputs) en variables
//isset() es una funcion de php que previene que el valor ingresado sea NULL
$mail = isset($_POST['mailLog']) ? trim($_POST['mailLog']) : '';
$pass = isset($_POST['passLog']) ? $_POST['passLog'] : '';

//Si alguna de las 2 esta vacia muestra un error
if($mail === '' || $pass === ''){
    header('Location: index.html?login=missing'); //Header lo uso para redirigir el msj desde php, a js y despues se muestra en index
    exit; //Es como el breack de js, inpide que se sigan enviando datos
}

//datos del host y la DB
$DB_HOST = "localhost";
$DB_USER = "root";
$DB_PASS = "";
$DB_NAME = "adotti_hardware";

//Establece la conexion con sql
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

//Si la conexion con el server falla muestra un error
if($mysqli->connect_error){
    header('Location: index.html?login=server_error'); //otro izitoast por si falla la conexion al servidor
    exit;
}
//Setea por las dudas el cotejamiento
$mysqli->set_charset('utf8mb4');

//Preparo con prepared statement los datos y compruebo si los datos cargados coinciden con los datos de la DB
$stmt = $mysqli->prepare("SELECT cliente_id, nombre, mail, pass_reg FROM clientes WHERE mail = ? LIMIT 1");
$stmt->bind_param("s",$mail);
$stmt->execute();
$result = $stmt->get_result();

//Devuelve lo que encontro en la tabla. fetch_assoc() es un metodo de php para traer mejor todos los campos de la tabla
if($row = $result->fetch_assoc()){
    $stored_pass = $row['pass_reg'];
   
    //Si la contraseña es correcta. muestra el msj de bienvenida 
    if($pass === $stored_pass){
        $_SESSION['cliente_id'] = $row['cliente_id'];
        $_SESSION['nombre'] = $row['nombre'];

        $nombre = urlencode($row['nombre']);
        header("Location: index.html?login=success&nombre=$nombre");
        exit;
    }else{
        header("Location: index.html?login=wrong_pass");
        exit;
    }
}else{
    header("Location: index.html?login=no_user");
    exit;
}

$stmt->close();
$mysqli->close();