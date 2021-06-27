// Name       : Jemin.Shin
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

function preload()
{
  //Image

  Start_Screen_Button = loadImage('Image_file/Start_Screen_Button.jpg')
  How_to = loadImage('Image_file/How_to.PNG')
  
  //Music
  Cool = loadSound('music_file/Cool.wav')
  Day = loadSound('music_file/Day.mp3')
  Need_U = loadSound('music_file/Tobu - Need U.wav')

  //Font
  Font= loadFont('Font/Font.otf')
}

function Music_Play(Current_Music)
{
  Current_Music.play()
}

function Music_Stop(Current_Music)
{
  Current_Music.stop()
}
