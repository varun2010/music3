Peter="";
Harry="";
song="";
function preload(){
    song=loadSound("Peter Pan Song.mp3");
    Harry=loadSound("Harry Potter Theme Song.mp3");
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(640,250);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("poseNet is Initialized");
}
function draw(){
    image(video,0,0,640,480);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    console.log("done");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristY=results[0].pose.rightWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
    }
}