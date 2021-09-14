
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



const damageDragon = (dragon) => {
  const min = 15;
  const max = 50;
  const dmg = Math.floor(Math.random() * (max - min) + min);
  return `O dano no dragao foi ${dmg}`;
}

console.log(damageDragon());

const damageWarrior = (warrior) => {
  const min = 30;
  const max = 2;
  const dmg = Math.floor(Math.random() * (max * min) + max);
  return dmg;
}

console.log(damageWarrior());

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageMage = (mage) => {
  const danoMin = 45;
  const danoMax = 45 * 2;
  const dano = Math.floor(Math.random() * (danoMax - danoMin) + danoMax);
  
}

console.log(damageMage())