let mediaStream;
let canvas;
let video;
async function launchCamera() {
  try {
    const mediaStreamConstraints = {
        video: true, 
        audio: false
    };
    mediaStream = await navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
  
    video = document.getElementById('videoElem');
    video.srcObject = mediaStream;
    video.play();

  } catch(err) {
    console.error({ err });
  }
}

function takeShot() {
  if (!mediaStream) {    
    alert('No camera yet');
    return false;
  }
  const mediaTrack = mediaStream.getVideoTracks();  
  const imageCapture = new ImageCapture(mediaTrack[0]);

  imageCapture.takePhoto()
  .then(blob => createImageBitmap(blob))
  .then(imageBitmap => {
    canvas = document.querySelector('#takePhotoCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch(error => {
    console.error(error);
  });
}

function drawCanvas(canvas, img) {
    canvas.width = getComputedStyle(canvas).width.split('px')[0];
    canvas.height = getComputedStyle(canvas).height.split('px')[0];
    let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
}

async function saveShot() {
   if (!canvas) {
     alert('Canvas is empty');
     return false;
   }
   const imageBase64 = canvas.toDataURL("imgage/png");
   const formData = new FormData();
   formData.append('fileBinary', imageBase64);
   const response = await fetch('/snapshot-upload', {method: 'POST', body: formData});
   const res = await response.json();

   const divElem = document.getElementById("uploadedDiv");
   const img = document.createElement('img');
   img.src = `/uploaded/${res.filename}`;
   img.setAttribute('width', 150);
   //img.setAttribute('height', 150);
   img.setAttribute('style', 'margin: 2px; padding: 2px; border: solid silver 1px');
   divElem.appendChild(img);
}

function closeCamera() {
  video.srcObject = null;
}
/**
 Other media stream contrain option 

 // Referred: referres a resolution of 1280x720 but optional 
  const mediaStreamConstraints = {
    video: true, 
    // video: { width: 1280, height: 720 }, 
    audio: false
  };

 // Required: demands a minimum resolution of 1280x720:
 const mediaStreamConstraints = {
  audio: true,
  video: {
    width: { min: 1280 },
    height: { min: 720 }
  }
}
 */