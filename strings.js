const name = "Reeshu"
const repocount=44

console.log(name + repocount + "value");

console.log(`hELLO MY NAME IS ${name} AND MY REPO COUNT IS ${repocount}`);

const gamename  = new String('reeshu singh')

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt('2'));

const newstring = gamename.substring(0,4)
console.log(newstring)

const anotherstring = gamename.slice(-8,4);
console.log(anotherstring);

const url = "https://reeshusingh.com"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
