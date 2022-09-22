<?php


require '../phpmailer/PHPMailer.php'
require '../phpmailer/SMTP.php'
require '../phpmailer/Exception.php'

use PHPMailer/PHPMailer/PHPMailer;
use PHPMailer/PHPMailer/SMTP;
use PHPMailer/PHPMailer/Exception;
//added mail and sitetittle
$mailget = "oparavitalii@gmail.com"
$sitename = "My portfolio(feedback)"

// user data
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$phone = trim($_POST['phoneField1']);
$file = trim($_POST['file']);
$textarea = trim($_POST['textarea']);
//message
$message = " 
email:$mail \n 
phone:$phone \n 
textarea : $textarea \n 
"
//pagettitle
$pagetittle = "Feedback from \"$sitename\"";

mail($mailget,$sitename,$message, "Content-type: text/plain; charset=\"utf-8\"\n From: $mailget");



?>
