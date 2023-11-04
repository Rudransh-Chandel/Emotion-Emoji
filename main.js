prediction1 = ""
prediction2 = ""

Webcam.set({
width:350,
height:300,
image_format: "png",
png_quality:100
});

webcamera = document.getElementById("webcamera");

Webcam.attach("webcamera");

function takePhoto()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("imageshow").innerHTML = '<img id = "imagecaptured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GTdwLDtla/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model Is Loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak1 = "The First Prediction is - " + prediction1;
    speak2 = "The Second Prediction is - " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);
}