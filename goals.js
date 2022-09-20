let vs = Math.pow(10, 5);
console.log(vs, "XD");
let num = 8;
let goals = [6, 4, 3, 3, 3, 5, 11, 15];

let teamA = [];
let teamB = [];
if (goals.length % 2 !== 0 || goals.length != num) {
  console.log("No");
  return "NO";
}
for (let index = 0; index < goals.length; index++) {
  let goal = goals[index];
  if (Math.sign(goal) == -1) {
    return console.log("ERROR NEGATIVO");
  }
  if (goals[index] < goals[index + 1]) {
    teamB.push(goals[index + 1]);
    teamB.push(goals[index]);
    index = index + 1;
  } else {
    teamA.push(goals[index]);
  }
}
console.log("goals", goals);
console.log("teamA", teamA);
console.log("TeamB", teamB);
if (teamA.length == 0) return console.log("YES");
return console.log("NO");
