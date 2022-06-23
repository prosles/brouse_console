class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if ( isNaN(id)){
            throw new Error('error text');
        } else if (this.alarmCollection.find(item => item.id === id) !==undefined)  {
            console.error('id звонка уже существует');
        } else {
            return this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id) {
        let lengthArray = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
        return (lengthArray > this.alarmCollection.length);
    }

    getCurrentFormattedTime () {
        let stringTime = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let totalTime = new Date();
        return stringTime(totalTime.getHours()) + ':' + stringTime(totalTime.getMinutes());
    }

    start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 60);
        }
        return;
    }

    stop() { 
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    } 

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + ': ' + item.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }  
}

function testCase() {
    let testAlarmClock = new AlarmClock;
    testAlarmClock.start();
    testAlarmClock.addClock('07:00', () => console.log ('Проснись!'), 1);
    testAlarmClock.addClock('07:01', () => console.log ('Пора просыпаться!'), 2);
    testAlarmClock.addClock('07:02', () => console.log ('Вставай!'), 3);
    testAlarmClock.addClock('07:03', () => console.log ('Проснись и пой!'), 4);
    testAlarmClock.printAlarms();
    testAlarmClock.removeClock(4);
    testAlarmClock.addClock('07:04', () => {
        testAlarmClock.stop();
        console.log ('Пора умываться!');
        }, 5);
        testAlarmClock.printAlarms();

}

testCase();



