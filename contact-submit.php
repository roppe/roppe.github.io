<?php
require_once "recaptchalib.php";
$secret = "6LcTvVYUAAAAABOviJMksiZpUMmv_iik7hifd-ER";
$response = null;
$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
if ($response != null && $response->success) {

    $message=
    'Name: 	'.$_POST['userName'].'<br /><br />
    Phone Number:	'.$_POST['phone'].'<br /><br />
    E-Mail:	  '.$_POST['userEmail'].'<br /><br />
    Subject: 	'.$_POST['subject'].'<br /><br />
    Additional Comments:	'.$_POST['comments'].'
    ';
    
    
    require('phpmailer/class.phpmailer.php');
    
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = "ssl";
    $mail->Port     = 465;  
    $mail->Username = "whiteglovebathtub@gmail.com";
    $mail->Password = "whiteglove1234";
    $mail->Host     = "smtp.gmail.com";
    $mail->Mailer   = "smtp";
    $mail->SetFrom($_POST["userEmail"], $_POST["userName"]);
    $mail->AddReplyTo($_POST["userEmail"], $_POST["userName"]);
    //$mail->AddAddress("munish@webwizmd.com");
    $mail->AddAddress("info@whiteglovereglazing.com"); //$mail->AddAddress("info@whiteglovereglazing.com");	  // Where to send it - Recipient
    $mail->Subject = "Quote Submission: White Glove Reglazing: ".$_POST['userName'];
    $mail->WordWrap   = 80; 
    $mail->MsgHTML($message);
    
    $mail->IsHTML(true);
    if($mail->Send()) {
        echo  'success';
    	//echo "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
    } else {
    	//echo "<meta http-equiv=\"refresh\" content=\"0;URL=contact-thanks.html\">";
    	echo 'fail 1' ;
    }

} else {
  
  echo 'fail 2';
}
die;
?>