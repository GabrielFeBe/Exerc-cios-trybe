
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
const fusao = { ...user, ...jobInfos };
console.log(fusao);

const { profession, squad, squadInitials, name, age, nationality } = fusao;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm Brazilian. I work as ${profession}
and my squad is ${squadInitials}-${squad}`)