var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  /**COMENTARIO DE LA PROFE: FRANCISCO, RECUERDA QUE LAS IMAGENES Y LAS ANIMACIONES
   * SE CARGAN DE ESTA MANERA pathImg = loadImage("path.png") no path.loadImage("path.png")
   */
  pathImg = loadImage("path.png")
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino)
 /*COMENTARIO DE LA PROFE: FRANCISCO, RECUERDA QUE PARA CREAR SPRITES ES 
 PATH = CREATESPRITE() NO PATH.CREATESPRITE*/
 path = createSprite(200, 200, 500, 50);
//agregar imagen de path
 path.addImage("path.png", pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.velocityY = -2; 
 if(path.y < 0) {
  path.y = path.width/2;
 }  
 console.log(path.y);

path.scale=1.2;

//crear sprite de boy (niño)
/*COMENTARIO DE LA PROFE: FRANCISCO, RECUERDA QUE PARA CREAR SPRITES ES 
 BOY = CREATESPRITE() NO BOY.CREATESPRITE*/
 boy = createSprite(200, 200, 30, 20);
//agregar animación para boy
 boy.addAnimation("runing", boyImg);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;


//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
