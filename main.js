noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!!!");
}

function draw() {
    background('#e875fa');
    //fill('#f77a0c');
    //stroke('#00ff3c');
    //strokeWeight(10);
    textSize(difference);
    text('Shreyaa', noseX, noseY);
    fill(0, 153, 0);
    document.getElementById("square_size").innerHTML = "Width and Height of the Word will be: " + difference + "px";
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX" + leftWristX + "rightWristX" + rightWristX + "difference" + difference);
    }
}