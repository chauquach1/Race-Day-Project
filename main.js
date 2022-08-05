var raceNumber = Math.floor(Math.random() * 1000);
var runnerAge = 20;
var earlyReg = false;
var raceTime ='';
if (runnerAge >= 18 && earlyReg) {
    raceNumber += 1000;
    raceTime = '9:30 AM';
} 
if (runnerAge >= 18 && !earlyReg) {
    raceTime = '11:00 AM';
} else if (runnerAge <= 18) {
    raceTime = '12:30 PM';
}
console.log(`Hello Racer #${raceNumber}. Your Race Time will be ${raceTime}`);
