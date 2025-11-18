<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Send to two email addresses
    $to = "santhosh5198kumar@gmail.com, ramadurai@deciderslearningfoundation.org, maran@deciderslearningfoundation.org, jamiemartin09@gmail.com";

    $subject = "New Contact Form Message";

    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Must be domain email
    $from = "no-reply@" . $_SERVER['SERVER_NAME'];

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed.";
    }
}
?>
