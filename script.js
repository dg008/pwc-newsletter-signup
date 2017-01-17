$(function() {
	
	$('.freq-btn').click(function() {
		$('.freq-btn').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('.cancel-btn').click(function() {
		$('.freq-btn').removeClass('selected');
	});
	
	$('.submit-btn').click(function(event) {
		$('#alert-msg').empty();
		if (!$('#terms_conds').is(':checked'))
		{			
			$('#alert-msg').html('You must agree to the terms and conditions<br/>');
			$('.alert').show();
						
			event.preventDefault();			
		}
		
		var name = $('#name').val();
		var email = $('#email').val();
		var newsletter = $('#newsletter').val();		
				
		if ($.trim(name) == ""
			|| $.trim(email) == ""
			|| newsletter === ""
			|| !$('.freq-btn').hasClass('selected'))
		{
			$('#alert-msg').append('You must complete all fields');
			$('.alert').show();
			event.preventDefault();	
		}
	});
	
	$('#terms_conds_link').click(function() {
		alert('Please read these terms and conditions carefully.\n\n'
		 + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ex sed felis malesuada luctus. Etiam ultricies gravida quam varius tempor. ')
	});		
});