$(document).ready(function (e){
$("#frmEnquiry").on('submit',(function(e){
	e.preventDefault();
	$('#loader-icon').show();
	var valid;	
	valid = validateContact();
	if(valid) {
		$.ajax({
		url: "get-quote.php",
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
	$("#zip").removeClass("invalid");
	$("#SurfaceType").removeClass("invalid");
	$("#ReglazedBefore").removeClass("invalid");
	$("#TubCovered").removeClass("invalid");
	$("#Caulking").removeClass("invalid");
	//$("#Regrouting").removeClass("invalid");
	$("#AntiSlip").removeClass("invalid");
	$("#comments").removeClass("invalid");
	$("#consent").removeClass("invalid");
	
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
	if(!$("#zip").val()) {
		$("#zip").addClass("invalid");
        $("#zip").attr("title","Required");
		valid = false;
	}
	if ($('input[name="SurfaceType[]"]:checked').length == 0){
		$("#SurfaceType").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="ReglazedBefore"]:checked').length == 0){
		$("#ReglazedBefore").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="TubCovered"]:checked').length == 0){
		$("#TubCovered").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="Caulking"]:checked').length == 0){
		$("#Caulking").addClass("invalid").attr("title","Required");
		valid = false;
	}
	/*if ($('input[name="Regrouting"]:checked').length == 0){
		$("#Regrouting").addClass("invalid").attr("title","Required");
		valid = false;
	}*/
	if ($('input[name="AntiSlip"]:checked').length == 0){
		$("#AntiSlip").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="consent"]:checked').length == 0){
		$("#consent").addClass("invalid").attr("title","Required");
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