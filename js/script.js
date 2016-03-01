var iniMinutes = 0;
var counter = 0;
var interval;
var element;

/* Controls */
 
// Start
$('#takePhoto').on('click', function() {
	// TAKE PHOTO
	takePhoto();
});

/* Functions */

// Resize
function resize(image) {

	var imageDataInBase64 = image;

	window.imageResizer.resizeImage(
	function(data) { 
		var image = document.getElementById('myImage');
		image.src = "data:image/jpeg;base64," + data.imageData; 
	}, function (error) {
		console.log("Error : \r\n" + error);
	}, imageDataInBase64, 400, 400, {
		resizeType: ImageResizer.RESIZE_TYPE_FACTOR,
		format: 'jpg'
	});
}


function takePhoto(){
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
		quality: 20, 
		allowEdit: true, 
		destinationType: navigator.camera.DestinationType.DATA_URL 
	});
}

function onPhotoDataSuccess(imageData) {
	var photo = document.getElementById('photo');
	photo.style.display = 'block';
	photo.src = "data:image/jpeg;base64," + imageData;

	resize(imageData);

	// var sendPhoto = document.getElementById('sendPhoto');
	// sendPhoto.style.display = 'block';
}

function onFail(message) {
	alert('Failed because: ' + message);
}