var Alert = function(){
	this.timer = null;
	this.box = null;
	this.msg = null;

	this.alert = '<div style="display: none;" id="alert-box" class="alert alert-success fade in"><p id="alert-box-message"></p></div>';
}

Alert.prototype.success = function(msg){
	return this.update(msg, 'success');
}

Alert.prototype.fail = function(msg){
	return this.update(msg, 'fail');
}

Alert.prototype.init = function(){

	// Create if it doesn't exist
	if (0 == $('#alert-box').length) {
		$('body').append( $(this.alert) );

		this.box = $('#alert-box');
		this.msg = $('#alert-box-message');

		this.box.alert().show();

		this.box.on('click', function(e){
			this.box.alert('close');
		});
	}

}


Alert.prototype.update = function(msg, state){

	// Stop timer
	clearTimeout(this.timer);

	this.init();

	// Update the message
	this.msg.html(msg);

	this.box.removeClass('alert-danger').removeClass('alert-warning').removeClass('alert-success');

	/*

	if (state == 'success') {
		this.box.addClass('alert-success');
	} else if (state == 'fail') {
		this.box.addClass('alert-danger');
	}

	*/

	this.timer = window.setTimeout(function(t){
		t.box.alert('close');
	}, 5000, this);
}

var a = new Alert();