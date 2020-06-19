$(document).ready(function (e){
$("#frmEnquiry").on('submit',(function(e){
	e.preventDefault();
	$('#loader-icon').show();
	var valid;	
	valid = validateContact();
	if(valid) {
		$.ajax({
		url: "book-appointment.php",
		type: "POST",
		data:  new FormData(this),
		contentType: false,
		cache: false,
		processData:false,
		success: function(data){
		$("#mail-status").html(data);
		$('#loader-icon').hide();
		},
		error: function(){ 	        
		    	$('#loader-icon').hide();
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
	$("#Date").removeClass("invalid");
	$("#Time").removeClass("invalid");
	$("#SurfaceType").removeClass("invalid");
	$("#ReglazedBefore").removeClass("invalid");
	$("#TubCovered").removeClass("invalid");
	$("#Recaulk").removeClass("invalid");
	$("#NonSkid").removeClass("invalid");
	$("#ColorOption").removeClass("invalid");
	$("#Window").removeClass("invalid");
	$("#SmellRefinish").removeClass("invalid");
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
	if(!$("#Date").val()) {
		$("#Date").addClass("invalid");
        $("#Date").attr("title","Required");
		valid = false;
	}
	if(!$("#Time").val()) {
		$("#Time").addClass("invalid");
        $("#Time").attr("title","Required");
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
	if ($('input[name="Recaulk"]:checked').length == 0){
		$("#Recaulk").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="NonSkid"]:checked').length == 0){
		$("#NonSkid").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="ColorOption"]:checked').length == 0){
		$("#ColorOption").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="Window"]:checked').length == 0){
		$("#Window").addClass("invalid").attr("title","Required");
		valid = false;
	}
	if ($('input[name="SmellRefinish"]:checked').length == 0){
		$("#SmellRefinish").addClass("invalid").attr("title","Required");
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

});