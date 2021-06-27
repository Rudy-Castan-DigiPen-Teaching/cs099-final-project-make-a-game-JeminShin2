
// Name       : Jemin.Shin
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let CURRENT_SCREEN = 0
let START_SCREEN = 1
let MAIN_SCREEN = 2
let GAME_SCREEN = 3
let GAME_END_SCREEN = 4
let Current_Music 
let Music1 = 11
let Music2 = 12
let Music3 = 13
let Music4 = 14

let A = 65
let S = 83
let D = 68
let F = 70
let J = 74
let K = 75
let L = 76
let Semi = 186

let Music_Score = 0
let Music_Combo = 0
let Music_Event 

let StartTime1
let StartTime2

function setup()
 {
    
  
    let Screen_Width = 800
    let Screen_Height = 800
    createCanvas(Screen_Width, Screen_Height);
    CURRENT_SCREEN = START_SCREEN
    Music2_spawn()
    Music1_spawn()
    
  
  
  }
     

  function draw() 
  {
    
    image(Start_Screen_Button,0,0,width,height)
    push()
    fill(0,100)
    rect(0,0,800,800)
    pop()
    
    switch(CURRENT_SCREEN)
    {
      case START_SCREEN:
        StartScreen();
       break;

      case MAIN_SCREEN:
        MainScreen();
        
        break;
      case GAME_SCREEN:
        GameScreen();
        break;

    }          
  }
