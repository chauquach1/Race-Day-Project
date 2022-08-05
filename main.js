var raceNumber = Math.floor(Math.random() * 1000);
var runnerAge = 18;
var regStatus = true;
if (runnerAge >= 18 && (regStatus)) {
    let earlyAdultNumber = raceNumber+1000;
    console.log(`Racer #${earlyAdultNumber}, Thank You For Registering. Your Race Time is 9:30 AM.`);
} else if (runnerAge >= 18) {
    console.log(`Racer #${raceNumber}, Thank You For Registering. Race Time is 11:00 AM.`);
} else {
    console.log (`Hello Youth Racer #${raceNumber}. Thank You Registering. Your Race Time is at 12:30 PM.`);
}
