const substituaX = (nome) => {
    const trybe = `Tryber ${nome} aqui!`;
    return trybe;
}
const minhasSkills = (xablau) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    return `${xablau}\nMinhas três principais habilidades são:\n${skills[0]}\n${skills[1]}\n${skills[2]}`;
}
console.log(minhasSkills(substituaX('gabriel')));