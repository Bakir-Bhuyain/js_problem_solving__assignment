function checkName(name) {
  if (typeof name !== "string") {
    return "please provide a valid name";
  }
  let checkTheLastLatter = name.slice(-1);
  let assigningTheLatterInLowerCase = checkTheLastLatter.toLocaleLowerCase();
  let checkList = ["a", "y", "i", "e", "o", "u", "w"];
  if (checkList.includes(assigningTheLatterInLowerCase)) {
    return "Good name";
  } else {
    return "Bad name";
  }
}
const names = checkName(["Rashed"]);
console.log(names);
