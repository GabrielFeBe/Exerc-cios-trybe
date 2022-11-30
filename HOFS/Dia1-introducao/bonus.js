const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// console.log(battleMembers.dragon)

const dmgGenerator = (d1, d2) => {
  return Math.floor(Math.random() * (d2 - d1 + 1) + d1)
}

const dragonDmg = () => dmgGenerator(15, battleMembers.dragon.strength);

console.log(dragonDmg())

const warriorDmg = () => dmgGenerator(battleMembers.warrior.strength, battleMembers.warrior.strength * battleMembers.warrior.weaponDmg);
warriorDmg();
// console.log(battleMembers.warrior)

const mageDmg = () => {
  if (battleMembers.mage.mana >= 15) {
    const dmg = dmgGenerator(battleMembers.mage.intelligence, battleMembers.mage.intelligence * 2);
    // console.log(dmg);
    return {
      damage: dmg,
      mana: battleMembers.mage.mana - 15,
    }
  }
  throw new Error('não possui mana');
}

// battleMembers.mage = mageDmg();
// battleMembers.mage = mageDmg();
// battleMembers.mage = mageDmg();
// battleMembers.mage = mageDmg();
// battleMembers.mage = mageDmg();
// battleMembers.mage = mageDmg();
console.log(battleMembers.mage)

const gameActions = {
  // Crie as HOFs neste objeto.
  dgmDealWarrior: (warriorFunc) => {
    const dmg = warriorFunc();
    battleMembers.dragon.healthPoints = battleMembers.dragon.healthPoints - dmg;
    battleMembers.warrior.damage = dmg;
  },
  dmgDealMage: (mageFunc) => {
    const dmgM = mageFunc();
    battleMembers.dragon.healthPoints = battleMembers.dragon.healthPoints - dmgM.damage;
    battleMembers.mage.damage = dmgM.damage;
    battleMembers.mage.mana = dmgM.mana;
  }, dmgDealDragon: (dragonFunc) => {
    const dmgD = dragonFunc();
    battleMembers.warrior.healthPoints = battleMembers.warrior.healthPoints - dmgD;
    battleMembers.mage.healthPoints = battleMembers.mage.healthPoints - dmgD;
    battleMembers.dragon.damage = dmgD;
  }, atualiza: () => {
    return battleMembers;
  }
};
gameActions.dgmDealWarrior(warriorDmg)
gameActions.dmgDealMage(mageDmg)
gameActions.dmgDealDragon(dragonDmg)
console.log(gameActions.atualiza())