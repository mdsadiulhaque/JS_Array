//Function Declaration
function walk(){
    console.log('walk');

}

// Anonymos Function Expression
const run = function(){
    console.log('run');

};

let move = run;
run();
move();
