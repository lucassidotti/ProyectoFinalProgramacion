<?php

//Inicia la session
session_start();

//guardo los valores del post(inputs) en variables
$mail = $_POST['mailLog'];
$pass = $_POST['passLog'];

//Si alguna de las 2 esta vacia muestra un error
if($mail === '' || $pass === ''){
    header('Location: index.html?login=missing'); //Header lo uso para redirigir el msj desde php, a js y despues se muestra en index
    exit; //Es como el breack de js, inpide que se sigan enviando datos
}

//datos del host y la DB
$host = "localhost"; 
$user = "root";      
$passDB = "";        
$db = "adotti_hardware"; 

//Establece la conexion con sql
$conexion = new mysqli($host, $user, $passDB, $db);
//Si la conexion con el server falla muestra un error
if($conexion->connect_error){
    header('Location: index.html?login=server_error'); //otro izitoast por si falla la conexion al servidor
    exit; // exit funciona como el 'break' de js
}
//Setea por las dudas el cotejamiento
$conexion->set_charset('utf8mb4');

//consulta a la tabla clientes dentro de la DB si existe el mail ingresado
$consulta = "SELECT * FROM clientes WHERE mail = '$mail'";
$resultado = mysqli_query($conexion,$consulta);

//Si existe compara la contraseña ingresada con la guardada en la DB
if(mysqli_num_rows($resultado) > 0){
    $fila = mysqli_fetch_assoc($resultado);
    if($fila['pass_reg'] == $pass){
        $_SESSION['cliente_id'] = $fila['cliente_id'];
        $_SESSION['nombre'] = $fila['nombre'];
        $nombre = $fila['nombre'];
        header("Location: index.html?login=success&nombre=$nombre");//Si esta todo bien loguea y muestra el toast
        exit;
    }else{
        header("Location: index.html?login=wrong_pass"); //Sino muestra contraseña incorrecta
        exit;
    }
}else{
    header("Location: index.html?login=no_user"); //Si el mail no existe te avisa que el usuario no esta registrado
    exit;
}

$conexion->close(); //cierra la consulta
