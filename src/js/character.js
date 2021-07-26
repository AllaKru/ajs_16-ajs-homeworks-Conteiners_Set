
const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректные значения! Name должно быть строкой, длиной более 2 и менее 10 символов');
    } else if (arr.indexOf(type) === -1) {
      throw new Error('Некорректные значения! Нет такого типа персонажа');
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      // this.attack = attack;
      // this.defence = defence;
    }
  }
}
