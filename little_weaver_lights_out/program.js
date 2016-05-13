/* Lights Out is a classic puzzle game.
 * (https://en.wikipedia.org/wiki/Lights_Out_%28game%29)
 * The rules are as follows:
 *
 * 1. Player is presented with a board with a random
 *    arrangement of on and off lights.
 *
 * 2. Each time player presses a light, it toggles that
 *    light's state as well as the state of the lights
 *    immediately above, below, left, and right of it.
 *    For example, given this board:
 *
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◼︎ ◻︎ ◼︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◼︎ ◼︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *
 *    Pressing on the light in the second column of the
 *    second row results in:
 *
 *    ◻︎ ◼︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◼︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◼︎ ◼︎ ◼︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *
 *    The toggling of lights does not "wrap around" the
 *    board. So, for instance, now pressing the light in the
 *    second column of the top row only toggles four lights:
 *
 *    ◼︎ ◻︎ ◼︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◼︎ ◼︎ ◼︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *    ◻︎ ◻︎ ◻︎ ◻︎ ◻︎
 *
 * 3. When the player successfully turns off all the lights
 *    they win.
 *
 *
 * If you're interested in a known algorithm for winning,
 * this explanation is pretty good:
 * http://www.logicgamesonline.com/lightsout/tutorial.html
 *
 *
 * Your task today is to implement a simple 5x5 version of
 * this game. We've provided the HTML and styles for it.
 * You will need to write javascript that will:
 *
 * 1. Toggle the appropriate 3 to 5 lights. (Change their class
 *    from `off` to `on`.)
 * 2. Check if all the lights are off. If they are, call
 *    `victory();`
 * 3. Set up the board with a random arrangement of lights.
 *
 * Guidelines:
 *
 * - Feel free to use jQuery or just vanilla javascript.
 * - Don't worry about browser compatibility. We'll check
 *   your work in any modern browser of your choice.
 * - Feel free to use javascript documentation; just don't
 *   reference other implementations of Lights Out.
 *   (Chances are other implementations will be more
 *   complicated than we're looking for here anyway.)
 *
 */



function victory () {
  alert('Victory!');
  setUp();
}

function setUp() {
  // This should set up the board with a random arrangement
  // of on and off lights. Note that not all Lights Out
  // boards are solvable. An easy way to generate solvable
  // boards is by simulating random clicks.

}

// Write the code to handle clicking on the lights here.
// Code to toggle 5 squares on and off
// Next Steps: remove wrap element
 $('.square.off').click(function() {
    console.log("log click")
     $(this).toggleClass('on');
     $(this).prev().toggleClass('on');
     $(this).next().toggleClass('on');
     $(this).nextAll().eq(4).toggleClass('on');
     $(this).prevAll().eq(4).toggleClass('on');
     $(this).toggleClass('off');
 });

// Start the game:
setUp();
