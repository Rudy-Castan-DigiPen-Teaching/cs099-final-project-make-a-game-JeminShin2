// Name       : Jemin.Shin
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

function GameScreen()
{
    
  //Game Bar
  fill(204)
  let GameX = width/10
  let GameY = 50
  let GameWidth = 80
  let GameHeight = 600
  let Game_Button_X = width /10
  let Game_Button_Y = 650
  let Game_Button_Width = 80
  let Game_Button_Height = 50
 
  let G_Back_Button_X = 600
  let G_Back_Button_Y = 730
  let G_Back_Button_Width = 100
  let G_Back_Button_Height = 40

  mouseX_G_Back_Button_Width = mouseX  > 600 && mouseX < 700
  mouseY_G_Back_Button_Width = mouseY > 730 && mouseY < 770 
  if(mouseIsPressed)
  {
    if(mouseX_G_Back_Button_Width&&mouseY_G_Back_Button_Width )
    {
        CURRENT_SCREEN = MAIN_SCREEN
        Current_Music =Music3
    }
  }

  push()
  strokeWeight(1)
  fill(255,20)
  textSize(14)
  text('Back' , 640,750)
  rect(G_Back_Button_X,G_Back_Button_Y,G_Back_Button_Width,G_Back_Button_Height,20)
  pop()
  
  Button_Color_A = 15
  Button_Color_S = 15
  Button_Color_D = 15
  Button_Color_F = 15
  Button_Color_J = 15
  Button_Color_K = 15
  Button_Color_L = 15
  Button_Color_semi = 15

  
  for(row = 0; row < 8; ++row)
  {        
    fill(255,30);
    strokeWeight(5)
    stroke(255)
    rect(GameX + row * GameWidth , GameY, GameWidth,GameHeight)
  }
  

  
    if(keyIsPressed)
    {
        if(keyCode == A)
        {
            Button_Color_A = 50
        
            //console.log('A')
          
        } 
        
         if(keyCode == S)
        {
            Button_Color_S = 50
        
            //console.log('S')
          
        } 
         if(keyCode == D)
        {
            Button_Color_D = 50
        
            //console.log('D')
        } 
         if(keyCode == F)
        {
            Button_Color_F = 50
        
            //console.log('F')
        } 
         if(keyCode == J)
        {
            Button_Color_J = 50
        
            //console.log('J')
        } 
         if(keyCode == K)
        {
            Button_Color_K = 50
        
            //console.log('K')
        } 
         if(keyCode == L)
        {
            Button_Color_L = 50
        
            //console.log('L')
        } 
         if(keyCode == Semi )
        {
            Button_Color_semi = 50
        
            //console.log(';')
        }
    } 
    push()
    fill(255)
    strokeWeight(2)
    line(0,650,800,650)
    pop()
  
    push()
    noStroke()
    fill(255, Button_Color_A)
    rect(Game_Button_X  ,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_S)
    rect(Game_Button_X*2,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_D)
    rect(Game_Button_X*3,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_F)
    rect(Game_Button_X*4,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_J)
    rect(Game_Button_X*5,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_K)
    rect(Game_Button_X*6,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_L)
    rect(Game_Button_X*7,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    fill(255, Button_Color_semi)
    rect(Game_Button_X*8,Game_Button_Y-600,Game_Button_Width,Game_Button_Height+600)
    pop()


    push()
    fill(0,100)
    rect(Game_Button_X,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*2,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*3,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*4,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*5,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*6,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*7,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    rect(Game_Button_X*8,Game_Button_Y,Game_Button_Width,Game_Button_Height)
    pop()


    push()
    noStroke()
    fill(255)
    textFont(Font)
    textSize(30)
    text("A",100,685)
    text("S",100+80 ,685)
    text("D",100+80*2 ,685)
    text("J",100+80*4 ,685)
    text("F",100+80*3 ,685)
    text("K",100+80*5 ,685)
    text("L",110+80*6 ,685)
    text(";",120+80*7 ,685)
    pop()


   push()
   stroke(0)
   textSize(50)
   fill(255)
   text(int(Music_Score),80,750)
   pop()


   if(Music_Combo > 0)
   {
    push()
    textSize(30)
    stroke(0)
    fill(255)
    text(int(Music_Combo),380,160)
    textSize(20)
    text('Combo',365,200)    
    pop()
    
   }
   
   
   
   
   
   
    
   
   switch(Current_Music)
{        
    case Music1: 
    Music1_Draw()
    
    break;
    case Music2: 
    Music2_Draw()
    
    break;
}
   
   



 
 
 
 

         
  
}
