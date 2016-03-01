var iniMinutes = 0;
var counter = 0;
var interval;
var element;

/* Controls */
 
// Take photo from camera
$('#takePhoto').on('click', function() {
	// TAKE PHOTO
	takePhoto();
});

// Pick photo from gallery
$('#pickPhoto').on('click', function() {
	// TAKE PHOTO
	pickPhoto();
});


/* Functions */

// Resize
function resize(image) {

	var imageDataInBase64 = image;

	window.imageResizer.resizeImage(
	function(data) { 
		var image = document.getElementById('photo');
		image.src = "data:image/jpeg;base64," + data.imageData; 
	}, function (error) {
		console.log("Error : \r\n" + error);
	}, imageDataInBase64, 400, 0, {
		// resizeType: ImageResizer.RESIZE_TYPE_FACTOR,
		format: 'jpg'
	});
}


function takePhoto(){
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
		quality: 50, 
		targetWidth: 400,
		targetHeight: 400,
		allowEdit: false, 
		destinationType: navigator.camera.DestinationType.DATA_URL 
	});
}

function pickPhoto(){
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
		quality: 50, 
		targetWidth: 400,
		targetHeight: 400,
		allowEdit: false, 
		destinationType: navigator.camera.DestinationType.DATA_URL,
		sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY,
		mediaType: navigator.camera.MediaType.PICTURE
	});
}

function onPhotoDataSuccess(imageData) {
	var photo = document.getElementById('photo');
	// photo.style.display = 'block';
	photo.src = "data:image/jpeg;base64," + imageData;

	// resize(photo.src);

	// var sendPhoto = document.getElementById('sendPhoto');
	// sendPhoto.style.display = 'block';
}

function onFail(message) {
	alert('Failed because: ' + message);
}