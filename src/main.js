
import * as timer from './caEv';

function sayHi (){
    document.write("helo");
};


var now = new Date();
now=+now + 15000;

let timerId = timer.taskCreation("таймер1",sayHi,now);
var now2 = new Date();
now2=+now2 + 15000;

let timerId2 = timer.taskCreation("таймер2",sayHi,now2);
console.log( timer.listTimers);
