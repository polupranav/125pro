song = "";

LeftWristX =0;
LeftWristY =0;

RightWristX =0;
RightWristY =0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.center;
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(result){
    if(result.length > 0){
    console.log(result);
    
    LeftWristX = result[0].pose.leftWrist.x;
    LeftWristY = result[0].pose.leftWrist.y;
    console.log("leftWristX = " + LeftWristX, "leftWristY = " + LeftWristY);
    
    RightWristX = result[0].pose.rightWrist.x;
    RightWristY = result[0].pose.rightWrist.y;
    console.log("RightWristX = " + RightWristX, "RightWristY = " + RightWristY);
    }

    }
    function modelLoaded() {
        console.log("posenet is initiallized");
    }

    function play() {
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
    
    function draw() {
    image(video,0,0,600,500);
    }

function preload() {
    song = loadSound("music.mp3","music2.mp3");
}