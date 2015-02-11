// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
	var fire = new Firebase('https://flickering-inferno-4134.firebaseio.com/');
	fire.set({comment: ""});

	$("form.add-item").bind( "submit", function(e) {
		e.preventDefault();
		var text_tag = $(this).find("input[type='text']");
		text_in = text_tag.val().trim();
		fire.push({comment: text_in});
		text_tag.val('');
	});

	fire.on('child_added', function(snapshot) {
		var message = snapshot.val();
		var list_item = $('<li></li>');
		list_item.text(message.comment);
		$('ul').append(list_item);
	});
});