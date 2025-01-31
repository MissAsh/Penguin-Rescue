var MainMenu = function(game) {
};

var clouds
var muteState

MainMenu.prototype.create = function() {
  

      	//background
        //
        this.background=game.add.sprite(0,0,"background");
        this.background.width=game.width;
        this.background.height=game.height;

		this.clouds=game.add.tileSprite(0,0,game.width,game.height,"clouds")
	this.clouds.y=game.height-this.clouds.height;
		this.clouds.autoScroll(-150,0);
        //mountains
        	
        this.mountain1=game.add.sprite(0,0,"mountains1");
        this.mountain1.width=game.width;
        this.mountain1.height=game.height;

        this.mountain2=game.add.sprite(0,0,"mountains2");
        this.mountain2.width=game.width;
        this.mountain2.height=game.height;


		        	
        this.floor=game.add.tileSprite(0,1025,game.width,100,"floor");

		this.adventure = game.add.sprite(0,0,'adventure');
	    this.adventure.width=game.width;
        this.adventure.height=game.height;

		
    ground = game.add.sprite(0, 1025, 'ground');
    game.physics.arcade.enable(ground);
    ground.body.immovable = true;

	
		

	//create the player
   // The player at x:480 and y:440 and adjust its settings
   player = game.add.sprite(600, 830, 'player');


  //  initalise keyboard controls.
	enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
     

//	music1.stop();
	//music2.stop();
//	music3.stop();
//	musicComplete.stop();
	musicIntro = this.game.add.audio('intro');
  musicIntro.play();
	musicIntro.volume = 0.1

//	soundButton
// button = game.add.button(game.world.centerX - -1000, 000, 'muteButton', actionOnClick, this, 2, 1, 0);
  muteState=game.add.sprite(game.world.centerX - -1000, 000,"mute");
  muteState.visible = false;
  button = game.add.button(game.world.centerX - -1000, 000, 'muteButton', actionOnClick, this, 2, 1, 0);

  button.onInputOver.add(over, this);
  button.onInputOut.add(out, this);
  button.onInputUp.add(up, this);
}

function up() {
  console.log('button up', arguments);
}

function over() {
  console.log('mute');
}

function out() {
  console.log('button out');
}




/*
 * Update runs continuously. Its the game loop function.
 * Add collision detections and control events here
 */
MainMenu.prototype.update = function() {
if (enterKey.isDown)
   {
     startMenu1();
   }
   }

  startMenu1 = function() {
    this.game.state.start('Menu1');
  }
  function actionOnClick () {
    muteState.visible =! muteState.visible;
     if (!this.game.sound.mute) {
        this.game.sound.mute = true
		 } else {
		 this.game.sound.mute = false;
    }
 
}