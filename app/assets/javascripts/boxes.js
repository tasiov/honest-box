// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var bindChat = function(fire) {
	$("form.add-item").bind( "submit", function(e) {
		e.preventDefault();
		var text_tag = $(this).find("input[type='text']");
		text_in = text_tag.val().trim();
		fire.push({comment: text_in});
		text_tag.val('');
	});
};

var adjustScroll = function(chatBox) {
	chatBox[0].scrollTop = chatBox[0].scrollHeight;
};

var runScript = function() {
	var chatBox = $('#chat-box');
	var room = chatBox.attr('chat-title');
	var fire = new Firebase('https://flickering-inferno-4134.firebaseio.com/' + room);
	bindChat(fire);

	fire.on('child_added', function(snapshot) {
		var message = snapshot.val();
		var list_item = $('<p></p>');
		list_item.text(message.comment);
		chatBox.append(list_item);

		adjustScroll(chatBox);
	});
};

$(document).ready(runScript);
$(document).on("pageLoad", runScript);