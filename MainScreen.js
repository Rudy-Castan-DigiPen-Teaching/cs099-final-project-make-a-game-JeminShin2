// Name       : Jemin.Shin
// Assignment : Make a Game
// Course     : CS099
// Spring 2021


function MainScreen()
{
    
  let Rect_color1 = 50
  let Rect_color2 = 50
  let Back_Button_mouseX_Range = mouseX >50 && mouseX < 50 + 130
  let Back_Button_mouseY_Range = mouseY > 50 && mouseY < 50 +50  
  let Play_Button_X = mouseX > 140 && mouseX < 200 
  let Play_Button1_Y = mouseY > 270 && mouseY < 330
  let Play_Button2_Y = mouseY > 390 && mouseY < 450
  
  push()
  fill(0,150)
  rect(50,50,100,50,20)
  pop()
  
  push()
  fill(255)
  textFont(Font)
  textSize(20)
  text('Back',80,80)
  pop()

  push()
  noStroke()
  fill(200,50)
  rect(80,230,640,500,20)
  textFont(Font)
  textSize(40)
  fill(255)
  text('Music List',100,200)
  pop()

  push()
  strokeWeight(5)
  fill(255,Rect_color1)
  rect(110,250,580,100,20)
  fill(255,Rect_color2)
  rect(110,370,580,100,20)
  pop()

//Text
  push()
  fill(255)
  textSize(50)
  textFont(Font)
  text('Temple_',220,320)
  text('Tobu-Cool_ ',220,440)

  pop()
  //play
  push()
  noStroke()
  fill(255,20)
  rect(140,270,60,60,20)
  rect(140,390,60,60,20)
  pop()

  push()
  fill(255,80)
  strokeWeight(2)
  triangle(160,400,160,440,190,420)
  triangle(160,280,160,320,190,300)
  pop()

  
  
  
  
  
  if(mouseIsPressed)
  {
    if(Back_Button_mouseX_Range && Back_Button_mouseY_Range)
    {
      CURRENT_SCREEN = START_SCREEN
    }
    if(Play_Button_X &&Play_Button1_Y)
    {
      Current_Music = Music1
      CURRENT_SCREEN = GAME_SCREEN
      
      console.log(StartTime1)
      StartTime2 = 0
      
    }
    if(Play_Button_X && Play_Button2_Y)
    {
      Current_Music = Music2
      CURRENT_SCREEN = GAME_SCREEN
      
      console.log(StartTime2)
      
      
      
      
    }
  }

  switch(Current_Music)
  {        
      case Music1: 
      if(CURRENT_SCREEN = GAME_SCREEN)
      {
        Music_Play(Need_U)
      }
      else
      { 
        Music_Stop(Need_U)
      }
      break;
      case Music2: 
      if(CURRENT_SCREEN = GAME_SCREEN)
      {
        Music_Play(Cool,2)
      }
      else 
      {
        Music1_Stop(Cool)
      }
      break;
      
      
  }
           
  
}

