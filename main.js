var noseX = 0;
var noseY = 0;

function preload()
{
   lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}


function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet = ml5.poseNet(video,moduleLoaded);
    poseNet.on('pose',gotPoses);

}

function draw()
{
image(video,0,0,300,300);
image(lipstick,noseX-25,noseY+15,40,22);
}

function moduleLoaded()
{
    console.log("poseNot module is initialized");

}

function gotPoses(results)
{
    if(results.length > 0 ) 
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}

function take_snapshot()
{
    save('myFilterimage.png');
}