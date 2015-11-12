(function($) {
	var socket, $file;

	socket = io.connect('http://joshuaebowling.info:8003/');
	socket.on('news', function(data) {
		console.log(data);
	});

})(jQuery);