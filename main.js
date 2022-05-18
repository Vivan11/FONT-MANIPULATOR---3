noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Font size of the Text will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
   text('vivan',50,400);
   textSize(difference);
}

function modelLoded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWeistX = " + rightWristX + " difference = " + difference);
    }
}