let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
const runnersAge = 18;
if (runnersAge > 18){
  raceNumber += 1000;
};
if(registeredEarly && runnersAge > 18){
  console.log(`Your race time will be at 9:30am and your race number is ${raceNumber}.`);
} else if(!registeredEarly && runnersAge > 18){
  console.log(`Your race time will be at 11:00am and   your race number is ${raceNumber}.`);
} else if(runnersAge < 18){
  console.log(`Your race time will be at 12:30pm and your race number is ${raceNumber}.`);
} else {
  console.log(`consult the registration desk.`);
}