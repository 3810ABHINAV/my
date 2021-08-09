function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
console.log('PoseNet is Initialized')
}
function draw() {
image(video,0,0,400,400);
}
function take_snapshot (){
    save('myFilterImage.png');
}
