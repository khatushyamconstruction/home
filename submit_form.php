<?php
require 'vendor/autoload.php'; // Twilio Library Include

use Twilio\Rest\Client;

// Twilio Credentials
$sid = "ACf0036c909981ea7d8c4d86e38e191845"; 
$token = "9e4ec0e2230cdeb5d56074bd0b43beb2"; 
$twilio = new Client($sid, $token);

// Form se data fetch karna
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$work = $_POST['work-name'];
$message = $_POST['message'];

// WhatsApp pe bhejne wala message format
$whatsapp_message = "📩 *New Contact Form Submission*\n\n".
    "👤 *Name:* $name\n".
    "📧 *Email:* $email\n".
    "📞 *Mobile:* $mobile\n".
    "🏠 *Address:* $address\n".
    "🌆 *City:* $city\n".
    "🌍 *State:* $state\n".
    "🔨 *Work:* $work\n".
    "💬 *Message:* $message\n\n".
    "✅ *Submitted Successfully!*";

// WhatsApp Message Send Karna
$twilio->messages->create(
    "whatsapp:+91XXXXXXXXXX", // Yaha apna WhatsApp number daalo (Twilio Sandbox me registered)
    [
        "from" => "whatsapp:+14155238886", // Twilio Sandbox Number
        "body" => $whatsapp_message
    ]
);

// Success Message
echo "Form Submitted & WhatsApp Message Sent Successfully!";
?>
