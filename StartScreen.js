// Name       : Jemin.Shin
// Assignment : Make a Game
// Course     : CS099
// Spring 2021


var StartButton=
{
  x : 450,
  y : 400,
  width : 300,
  height : 60
}




function StartScreen()
{ 
  
  //image(Start_Screen_background ,0,0,0,800)
  
  
  
  
  
  let Start_mouseX_Range = mouseX > StartButton.x && mouseX <StartButton.x+StartButton.width
  let Start_mouseY_Range = mouseY > StartButton.y && mouseY < StartButton.y+StartButton.height
  
  let Credit_mouseX_Range = mouseX > StartButton.x && mouseX <StartButton.x+StartButton.width
  let Credit_mouseY_Range =  mouseY > StartButton.y+100 && mouseY < StartButton.y+100+StartButton.height

  let Options_mouseX_Range = mouseX > StartButton.x && mouseX <StartButton.x+StartButton.width
  let Options_mouseY_Range = mouseY > StartButton.y+200 && mouseY < StartButton.y+200+StartButton.height
  let Rect_color = 0
  
  push()
  
  fill(Rect_color,200)
  rect(StartButton.x,StartButton.y,StartButton.width,StartButton.height,20)   
  rect(StartButton.x,StartButton.y+100,StartButton.width,StartButton.height,20)
  rect(StartButton.x,StartButton.y+200,StartButton.width,StartButton.height,20)
  pop()
  
  push()
  textFont(Font)
  textAlign(CENTER)
  textSize(40)
  fill('white')
  text("Start", StartButton.x+150 , StartButton.y+40) 
  text("Credit", StartButton.x+150 , StartButton.y+140) 
  text("How to Play", StartButton.x+150 , StartButton.y+240) 

  pop()
  


  push()
  fill(255)
  textSize(200)
  textAlign(CENTER)
  textFont(Font)
  text("TAP!",width/2,300)
  pop()
  StartButtonPressed();
  
  function StartButtonPressed()
  {
    if(mouseIsPressed)
    {
     if (Start_mouseX_Range && Start_mouseY_Range) 
        {
          
          CURRENT_SCREEN = MAIN_SCREEN
        }
      
     if(Credit_mouseX_Range && Credit_mouseY_Range)
        {
          push()
          fill(255,50)
          rect(100,100,600,600,20)
          fill(255)
          textSize(14)
          text('Music1 - Tobu - Need U  Url : https://www.youtube.com/watch?v=mRmzUB0VZh0',120,400)
          text('Music2 - Tobu, Wholm & Blume - Cool https://www.youtube.com/watch?v=83_UnqjGRJs',120,450)
          text('Background_image = https://wallhere.com/ko/wallpaper/1735025',120,500)
          text('Font - https://www.1001freefonts.com/radish.font',120,550)
          text('Sound,Programming,Design By Jemin.Shin',120,600)
          pop()
          
        }
     if(Options_mouseX_Range && Options_mouseY_Range)
        {
          image(How_to,100,100,600,600)
        }
    }
  };          
  
}