//Create variables to hold user input, and the generated number.

var rollLog = [];
var diceSides;
var result;
var enableRepeat = true;

/*
Create a function to generate a random number between 1 and the input number, and display the result to the web page.
Allow user to exit the loop by typing "quit" after it has ran at least once.
*/

function randomNumberGen() {

    do {
        diceSides = prompt( 'Enter number of sides on the dice or type "quit" to exit: ' );
        
        diceSides = diceSides.toLowerCase();
  
        if (diceSides === "quit") {
  
            enableRepeat = false;
        } else {
            result = Math.floor( Math.random ( ) * diceSides ) + 1;

            rollLog.push( result );
            alert( result );
            
        }

    } while ( enableRepeat )
 
    document.write(rollLog.join( ", " ) )

}

//Call the function.

randomNumberGen();
