// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position
    this.x = 0;
    // y position
    this.y = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.moveXAxis = 101;
    this.boundary = this.moveXAxis * 5;
    this.resetPosition = -this.step;
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
        this.x += 200 * dt;
    } else {
        // Reset current position back to start.
        this.x = 0;
    }       
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player Class
class Player {
    // Constructor
    constructor() {
        // Properties
            this.moveXAxis = 101;
            this.moveYAxis = 83;
            this.initX = this.moveXAxis * 2;
            this.initY = (this.moveYAxis * 5) - 20;
            // x init position
            this.x = this.initX;
            // y init position
            this.y = this.initY;
            // Player sprite image
            this.sprite = 'images/char-boy.png';
    }
        // Methods
            // Update position
                // Check collision state.
                    // Did the player(x,y) collide with enemy(x,y)?
                // Check win state.
                    // Did the player(x,y) reach the final tile?
            // Render
                // Draw Player sprite on current (x,y) position.
            render() {
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
                }
            }
            // Reset Player
                // Set player(x,y) back to initial (x,y).
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// New Player object
const player = new Player();
// New Enemy object
const bug1 = new Enemy();
// Initialize allEnemies array
const allEnemies = [];
// For each enemy, create and push new Enemy object into allEnemies array.
allEnemies.push(bug1);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
