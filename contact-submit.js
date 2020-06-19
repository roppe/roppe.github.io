$(document).ready(function (e){
$("#frmEnquiry").on('submit',(function(e){
	e.preventDefault();
	$('#loader-icon').show();
	var valid;	
	valid = validateContact();
	if(valid) {
		$.ajax({
		url: "contact-submit.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(dataT){
		    
		    //$("#mail-status").html(dataT);
		    $('#loader-icon').hide();
		    
		    if( dataT.includes( 'success' )  ){
		        window.location.href = "https://www.whiteglovereglazing.com/contact-thanks.html";
		    } else {
		        window.location.href = "https://www.whiteglovereglazing.com/error.html";
		    }
		},
		error: function( e ){     
		    console.log(e);
		}
		});
	} else {
	    	$('#loader-icon').hide();
	}
}));

function validateContact() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".info").html('');
	$("#userName").removeClass("invalid");
	$("#userEmail").removeClass("invalid");
	$("#phone").removeClass("invalid");
	
	$("#comments").removeClass("invalid");
	
	if(!$("#userName").val()) {
		$("#userName").addClass("invalid");
        $("#userName").attr("title","Required");
        valid = false;
	}
	if(!$("#phone").val()) {
		$("#phone").addClass("invalid");
        $("#phone").attr("title","Required");
		valid = false;
	}
    if(!$("#userEmail").val()) {
        $("#userEmail").addClass("invalid");
        $("#userEmail").attr("title","Required");
        valid = false;
    }
    if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail").addClass("invalid");
        $("#userEmail").attr("title","Invalid Email");
        valid = false;
    }
	
	if(!$("#comments").val()) {
		$("#comments").addClass("invalid");
        $("#comments").attr("title","Required");
		valid = false;
	}
	
	return valid;
}

});// JavaScript Document