class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(500, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'aqua');
       // this.title.style(color(rgb(72, 202, 228)));
        this.title.style('fontStyle', 'italic');
        this.title.style('fontFamily',"Impact,Charcoal,sans-serif");
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'yellow');
       // this.input.style('backgroung',color(rgb(255, 255, 63)));
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lime');
       // this.button.style('background',color(rgb(158, 240, 26)));
        this.reset.position(1200, 660);
        this.reset.style('width', '60px');
        this.reset.style('height', '25px');
        this.reset.style('background', 'red');

        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("welcome " + player.name);
            this.greeting.position(400,250);
            this.greeting.style('color', 'yellow');
            this.greeting.style('font-size', '100px');
            this.greeting.style('stroke','black');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        });

    }
}