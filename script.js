function startClassifier()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/I3o2q00a2/'
    , modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, gotResults)
function gotResults(error, results)
if (error) {
    console.error('Got Result')
};