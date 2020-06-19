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
    ZIP / City of job site: 	'.$_POST['zip'].'<br /><br />
    Surface type:   '.implode(',  ' , $_POST['SurfaceType']).'<br /><br />
    Has the tub / surface been reglazed before?:	'.$_POST['ReglazedBefore'].'<br /><br />
    Is the tub covered with:	'.$_POST['TubCovered'].'<br /><br />
    Do you need caulking?	 '.$_POST['Caulking'].'<br /><br />
    
    Do you need Anti Slip Application?    '.$_POST['AntiSlip'].'<br /><br />
    Additional Comments:	'.$_POST['comments'].'
    ';
    
    //Do you need Regrouting?	   '.$_POST['Regrouting'].'<br /><br />
    
    
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
    
    if( !empty( $_FILES["attachment"] ) ) {
        foreach ($_FILES["attachment"]["name"] as $k => $v) {
            $mail->AddAttachment( $_FILES["attachment"]["tmp_name"][$k], $_FILES["attachment"]["name"][$k] );
        }
    }
    
    $mail->IsHTML(true);
    if($mail->Send()) {
        echo  'success';
    	//echo "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
    } else {
    	//echo "<meta http-equiv=\"refresh\" content=\"0;URL=contact-thanks.html\">";
    	echo 'fail' ;
    }

} else {
  
  echo 'fail';
}
die;
?>