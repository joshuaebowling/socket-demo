(function($) {
	var socket, $file;

	$file = $('#file');
	$file.change(function(e) {
		var blobStream, file, stream;

		file = e.target.files[0];
		stream = ss.createStream();
		console.log(file, stream);
		ss(socket).emit('import-data', stream, {size: file.size, name: file.name});
		blobStream = ss.createBlobReadStream(file, {highWaterMark:1024}).pipe(stream);
		blobStream.on('data', function(chunk) {
			console.log(chunk.length);
		});
	});
	socket = io.connect('http://joshuaebowling.info:8003/upload');

})(jQuery);