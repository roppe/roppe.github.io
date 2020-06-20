<?php
require_once "recaptchalib.php";
$secret = "#Secret Key goes here...";
$response = null;
$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
?>


<?php

if ($response != null && $response->success) {

$message=
'Name:	'.$_POST['userName'].'<br /><br />
Phone Number:	'.$_POST['phone'].'<br /><br />
E-Mail:	'.$_POST['userEmail'].'<br /><br />
ZIP / City of job site:	'.$_POST['zip'].'<br /><br />
Date:	'.$_POST['Date'].'<br /><br />
Time:	'.$_POST['Time'].'<br /><br />
Surface type:   '.implode(',  ' , $_POST['SurfaceType']).'<br /><br />
Has the tub / surface been reglazed before?:	'.$_POST['ReglazedBefore'].'<br /><br />
Is the tub covered with:	'.$_POST['TubCovered'].'<br /><br />
Do you need to recaulk your bath tub?:	'.$_POST['Recaulk'].'<br /><br />
Do you need non skid treatment for your tub?:	'.$_POST['NonSkid'].'<br /><br />
Would you like to reglaze your surface in any color other than white??:	'.$_POST['ColorOption'].'<br /><br />
Does the Bathroom have window(s)?:	'.$_POST['Window'].'<br /><br />
NO Smell Refinish application?:	'.$_POST['SmellRefinish'].'<br /><br />
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
$mail->AddAddress("info@whiteglovereglazing.com");	  // Where to send it - Recipient //info@whiteglovereglazing.com
//$mail->AddAddress("munish@webwizmd.com");
$mail->Subject = "Book Appointment Submission: White Glove Reglazing: ".$_POST['userName']; //"Book Appointment Form - https://www.whiteglovereglazing.com/";      // Subject (which isn't required)  
$mail->WordWrap   = 80;
$mail->MsgHTML($message);
foreach ($_FILES["attachment"]["name"] as $k => $v) {
    $mail->AddAttachment( $_FILES["attachment"]["tmp_name"][$k], $_FILES["attachment"]["name"][$k] );
}

$mail->IsHTML(true);

if(!$mail->Send()) {
	echo "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
} else {
	echo "<meta http-equiv=\"refresh\" content=\"0;URL=contact-thanks.html\">";
				}

  } else {
  
  echo "you are not human"; die;
}

?>