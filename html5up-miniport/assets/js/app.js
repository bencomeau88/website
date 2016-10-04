var discounts = "<p> I participate in Maryland Medicade (??? what does that say?). </p>";
var insurance = "<p> I am a provider for BlueCross Blueshield Carefirst and most insurance plans will reimburse for the mental health treatment I provide as long as the plan allows you to get services out of network. <em>check with your insurance company regarding your specific coverage</em> </p>";
var collaborative = "<p> please note that Collaborative Divorce Coaching and Mediation are not reimburseable, if you are interested in this service please contact me for billing specifics </p>";
var payment = "<p> Payment is expected at time of service and I accept <em>cash</em> and <em>checks and I do not generally bill clients</em> </p>";

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