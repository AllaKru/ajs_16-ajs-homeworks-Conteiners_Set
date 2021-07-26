//  import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error(`${char} уже существует в команде`);
    } else {
      this.members.add(char);
      // console.log(this.members);
    }
  }

  addAll(...char) {
    char.forEach((el) => {
      this.members.add(el);

      //  console.log(this.members);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
