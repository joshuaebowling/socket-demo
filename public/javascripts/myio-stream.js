(function($) {
	var socket, $file;

	$file = $('#file');
	$file.change(function(e) {
		var file, stream;

		file = e.target.files[0];
		stream = ss.createStream();
		console.log(file, stream);
		ss(socket).emit('import-data', stream, {size: file.size, name: file.name});
		ss.createBlobReadStream(file).pipe(stream);
	});
	socket = io.connect('http://joshuaebowling.info:8003/upload');

})(jQuery);