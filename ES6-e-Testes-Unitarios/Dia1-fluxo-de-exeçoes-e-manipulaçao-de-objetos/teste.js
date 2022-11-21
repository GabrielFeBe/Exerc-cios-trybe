const verify = (value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
  throw new Error('value must be a number');
  }
};
const sum = (value1, value2) => {


try{
  verify(value1,value2);
  return value1 + value2;
}

catch(error) {
  return error.message;
}
}
console.log(sum(10, 400));

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

console.log(Object.keys(coolestTvShow));

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
console.log(listSkills(student2));
console.log(student2.css);


const coutries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(coutries);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

const student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => {
  return Object.values(student);
}

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
