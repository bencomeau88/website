var discounts = "<p> I participate in Maryland Medicade (??? what does that say?). </p>";
var insurance = "<p><b>Carefirst BlueCross BlueShield</b><br><b>Maryland Medicaid</b> (Value Options/Beacon Health)<br><i>(For specific coverage eligibility, please contact your provider.)</i></p>";
var collaborative = "<p> please note that <b>Collaborative Divorce Coaching</b> and <b>Mediation</b> are not reimburseable. <br>if you are interested in this service please contact me for billing specifics. </p>";
var payment = "<p> Payment is expected at time of service.<br>Forms for submission to insurance company for out of network claims will be provided upon request.<br><b>Collaborative Coaching</b> is not an insurance reimbursable expense. <br> I accept <b> cash </b> and <b> checks</b></p>";

$(document).ready(function(){

	$('.billing1').on('click',function(e){
		e.preventDefault();
		$.fancybox({
			'content': discounts
		});
	})
	$('.billing2').on('click',function(e){
		e.preventDefault();
		$.fancybox({
			'content': insurance
		});
	})
	$('.billing3').on('click',function(e){
		e.preventDefault();
		$.fancybox({
			'content': collaborative
		});
	})
	$('.payment').on('click',function(e){
		e.preventDefault();
		$.fancybox({
			'content': payment
		});
	})
})