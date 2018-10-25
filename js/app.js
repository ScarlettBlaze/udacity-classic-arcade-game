// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position
    this.x = x;
    // y position; centering Enemy object
    this.y = y + 55;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.moveXAxis = 101 + Math.floor(Math.random() * 222);
    this.boundary = this.moveXAxis * 5;
    this.resetPosition = -this.moveXAxis;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If the enemy is not passed the boundary
    if(this.x < this.boundary) {
        // Move forward
        // Increment x by speed * dt.
        this.x += this.speed * dt;
    } else {
        // Reset current position back to start.
        this.x = this.resetPosition;
    }       
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player class
class Player {
    // Player constructor
    constructor() {
        // Properties
            // Player sprite image
            this.sprite = 'images/char-boy.png';
            // Movement speed
            this.moveXAxis = 101;
            this.moveYAxis = 83;
            // x init position
            this.initX = this.moveXAxis * 2;
            this.x = this.initX;
            // y init position
            this.initY = (this.moveYAxis * 4) + 55;
            this.y = this.initY;
            // Win state
            this.win = false; 
           
    }
        // Methods
            // Update position
            update() {
                // Check collision state.
                for(let enemy of allEnemies) {
                    // Did the player(x,y) collide with enemy(x,y)?
                    if(this.y === enemy.y && (enemy.x + enemy.moveXAxis > this.x && 
                                              enemy.x < this.x + this.moveXAxis/2)) {
                            this.resetPosition();
                    }
                }
                // Check win state.
                    // Did the player(x,y) reach the final tile?
                    if(this.y === 55) {
                        this.win = true;
                    }
            }
            // Render
            render() {
                // Draw Player sprite on current (x,y) position.
                ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
            }
            // Keyboard controls
            /**
            *  Update player(x,y) properties according to keyboard input.
            * 
            * @param {string} input - Direction to go.
            */
            handleInput(input) {
                switch(input) {
                    case 'left':
                        if(this.x > 0) {
                            this.x -= this.moveXAxis;
                        }
                        break;
                    case 'up':
                        if(this.y > this.moveYAxis) {
                            this.y -= this.moveYAxis;
                        }
                        break;
                    case 'right':
                        if(this.x < this.moveXAxis * 4) {
                            this.x += this.moveXAxis;
                        }
                        break;
                    case 'down':
                        if(this.y < this.moveYAxis * 4) {
                            this.y += this.moveYAxis;
                        }
                        break;
                        case 'a':
                        if(this.x > 0) {
                            this.x -= this.moveXAxis;
                        }
                        break;
                    case 'w':
                        if(this.y > this.moveYAxis) {
                            this.y -= this.moveYAxis;
                        }
                        break;
                    case 'd':
                        if(this.x < this.moveXAxis * 4) {
                            this.x += this.moveXAxis;
                        }
                        break;
                    case 's':
                        if(this.y < this.moveYAxis * 4) {
                            this.y += this.moveYAxis;
                        }
                        break;
                }
            }
            // Reset Player
            resetPosition() {
                // Set player(x,y) back to initial (x,y).
                this.x = this.initX;
                this.y = this.initY;
            }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// New Player object
const player = new Player();
// New Enemy object
const bug1 = new Enemy(-101, 0, 100 + Math.floor(Math.random() * 400));
const bug2 = new Enemy(-101, 83, 125 + Math.floor(Math.random() * 400));
const bug3 = new Enemy((-101 * 2.5), 166, 150 + Math.floor(Math.random() * 400));
const bug4 = new Enemy(-101* 2.5, 0, 150 + Math.floor(Math.random() * 400));
const bug5 = new Enemy(-101* 2.5, 83, 125 + Math.floor(Math.random() * 400));
const bug6 = new Enemy((-101 * 2.5), 166, 100 + Math.floor(Math.random() * 400));
// Initialize allEnemies array
const allEnemies = [];
// For each enemy, create and push new Enemy object into allEnemies array.
allEnemies.push(bug1, bug2, bug3, bug4, bug5, bug6);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        87: 'w',
        65: 'a',
        83: 's',
        68: 'd',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
