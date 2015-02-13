// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var bindChat = function(messages) {
	$("form.add-item").bind( "submit", function(e) {
		e.preventDefault();
		var text_tag = $(this).find("input[type='text']");
		var text_in = text_tag.val().trim();
		messages.push({comment: text_in});
		text_tag.val('');
	});
};

// var bindLeave = function(users) {
// 	$("a").on("click", function(e) {
// 		e.preventDefault;
		
// 	});
// };

// var userJoin = function(users) {
// 	var new_user = $('h2#people-bar').attr('user');
// 	users.push({new_name: new_user});
// };

var adjustScroll = function(chatBox) {
	chatBox[0].scrollTop = chatBox[0].scrollHeight;
};

var runScript = function() {
	var chatBox = $('#chat-box');
	var room = chatBox.attr('chat-title');
	var fire = new Firebase('https://flickering-inferno-4134.firebaseio.com');
	var messages = fire.child(room + '/messages');
	var users = fire.child(room + '/names');

//	userJoin(users);

	bindChat(messages);
//	bindLeave(users);

	messages.on('child_added', function(snapshot) {
		var text_item = snapshot.val();
		var list_item = $('<p></p>');
		list_item.text(text_item.comment);
		chatBox.append(list_item);

		adjustScroll(chatBox);
	});

	// users.on('child_added', function(snapshot) {
	// 	var people_list = $('div.people');
	// 	var user_item = snapshot.val();
	// 	var user_tag = $('<p class="name"></p>');
	// 	user_tag.text(user_item.new_name);
	// 	people_list.append(user_tag);
	// });
};

$(document).ready(runScript);
$(document).on("page:load", runScript);