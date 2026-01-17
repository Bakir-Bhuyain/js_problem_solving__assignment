function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "put a valid input";
  }
  let site = obj.siteName;
  let capitalWord = site[0].toUpperCase() + site.slice(1);
  let passwordIs = capitalWord + "#" + obj.name + "@" + obj.birthYear;
  return passwordIs;
}
const total = password({
  name: "kolimuddin",
  birthYear: 1999,
  siteName: "google",
});
console.log(total);
