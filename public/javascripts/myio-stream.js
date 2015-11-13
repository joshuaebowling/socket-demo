(function($) {
	var $file, $output, renderOutput, socket, template;
	
	$file = $('#file');
	$output = $('#output');

	template = _.template('<p><%= line %></p>');
	renderOutput = function(output) {
		$output.append(template({line:output}));
	};
	$file.change(function(e) {
		var blobStream, file, stream;

		file = e.target.files[0];
		stream = ss.createStream();
		ss(socket).emit('import-data', stream, {size: file.size, name: file.name});
		blobStream = ss.createBlobReadStream(file, {highWaterMark:1024}).pipe(stream);
		blobStream.on('data', function(chunk) {
			console.log(chunk.length);
		});
		socket.on('column-data', function(data) {
			renderOutput(data.data);
		});
	});
	socket = io.connect('http://joshuaebowling.info:8003/upload');

})(jQuery);