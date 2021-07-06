var track, runner, runner_ani, track_img;
function preload(){
  //pre-load images
  track_img = loadImage("path.png");
  runner_ani = loadImage("Runner1.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites 
  //track = createSprite(200,200);
  //track.addImage("track1", track_img)
  //track.velocityY = 4;
  //track.scale = 1.2;
  runner = createSprite(100,300,100,100);
  runner.addImage("running", runner_ani);
  runner.scale = 1.5;
}

function draw() {
  background(0);
  //if(track.y > 400){
    //track.y = height/2;
  //}
  edges = createEdgeSprites()

  runner.collide(edges[0]);
  runner.collide(edges[1]);

  drawSprites();
}
