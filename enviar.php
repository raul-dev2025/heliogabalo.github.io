<?php
  $nombre = $_POST['name'];
  $correo = $_POST['email'];
  $mensaje = $_POST['message'];

  $destinatario = 'r4u1974@gmail.com';
  $asunto = 'Mensaje de contacto';

  $cabecera = 'From: ' . $correo . "\r\n";
  $cabecera .= 'Reply-To: ' . $correo . "\r\n";
  $cabecera .= 'X-Mailer: PHP/' . phpversion();

  $mensaje = 'Nombre: ' . $nombre . "\n";
  $mensaje .= 'Correo: ' . $correo . "\n";
  $mensaje .= 'Mensaje: ' . $mensaje;

  mail($destinatario, $asunto, $mensaje, $cabecera);

  header('Location: gracias.html');
  exit;
?>