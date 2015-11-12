(function($) {
	var socket;

	socket = io.connect('http://joshuaebowling.info:8003/');
	socket.on('news', function(data) {
		console.log(data);
	});
	
})(jQuery);