class Timer {
    constructor (timerId, date, name){
        this.timerId = timerId;
        this.date = date;
        this.name = name;
        this.task = task;
    }
};

var listTimers = [];

function dateCreation (...time){
  let str = '';


    if (typeof(time[0]) == "object"){
        return time[0];
    }

  if (typeof(time[0]) == "string"  && time[0].length>=10){
      return date = new Date.parse(time[0]);
  }

  if (!time[0]){
      str+=`${time[0]}`;
  }

    if (!time[1]){
        str+=`-${time[1]}`;
    }

    if (!time[2]){
        str+=`-${time[2]}`;
    }

    if (!time[3]){
        str+=`T${time[3]}`;
    }
    if (!time[4]){
        str+=`:${time[4]}`;
    }
    if (!time[5]){
        str+=`:${time[5]}`;
    }

    let date1 = Date.parse(str);
    return date1;
};

function taskCreation (name, task, ...time){

    let now = new Date();
    let date = dateCreation(time);


    if ((+now)>(+date)){
        alert("Данное время уже прошло : " + now + "время date : " + date);
        return undefined;
    }

    let periodStart = date-now;
    alert(periodStart );

    if (typeof(task)=="function"){
        var timerId = setTimeout(task, periodStart);
    } else{
        alert("Не функция");
        return 0;
    }

    let timer = new Timer(timerId, date, name, task);
    addListTimer(listTimers, timer);
    return timer;
};

function addListTimer (listTimers, timer){
    listTimers.push(timer);
};


function removeTimer (name, a=0) {
 if (a==0){
    for (let timer of listTimers){
        if (timer.name==name){
            clearTimeout(timer.timerId);
        }
    }
 }else{
     for (let timer of listTimers){
         if (timer.timerId==name){
             clearTimeout(timer.timerId);
         }
 }
}
};

function changeTimerName (name, newName, a=0){
    if (a==0){
        for (let timer of listTimers){
            if (timer.name==name){
                timer.name==newname;
            }
        }
    }else{
        for (let timer of listTimers){
            if (timer.timerId==name){
                timer.name==newname;
            }
        }
}
}

function changeTimerDateByName (name, ...newDate){
    if (a==0){
        for (let timer of listTimers){
            if (timer.name==name){
                taskCreation(timer.name,timer.task, ...newDate);
                return;
            }
        }
    }
}

function changeTimerDateByTimerId (timerId, ...newDate){
    if (a==0){
        for (let timer of listTimers){
            if (timer.timerId==timerId){
                taskCreation(timer.name,timer.task, ...newDate);
                return;
            }
        }
    }
};

export {listTimers };
export {taskCreation};

export {removeTimer};
export {changeTimerName };
export {changeTimerDateByName };
export {changeTimerDateByTimerId };