
import Team from '../app';
import Character from '../character';

const team = new Team();
const bowman = new Character('Alex', 'Bowman');
const demon = new Character('Oleg', 'Daemon');
const zombie = new Character('Lora', 'Zombie');

test('работа метода add', () => {
  team.add(bowman);
  expect(team.members).toContain(bowman);
});
test('выброс ошибки метода add', () => {
  expect(() => team.add(bowman)).toThrowError();
});
test('работа метода addAll', () => {
  team.addAll(demon, zombie, bowman, demon);
  expect(team.members).toContain(demon, zombie, bowman);
  expect(team.members.size).toBe(3);
});
test('работа метода toArray', () => {
  team.members.clear();
  team.addAll(demon, zombie, bowman);
  expect(team.toArray()).toEqual([demon, zombie, bowman]);
});
