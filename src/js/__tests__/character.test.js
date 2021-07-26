/* eslint-disable no-new */
import Character from '../character';

test('работа character - выброс ошибки', () => {
  expect(() => { new Character('O', 'Bowman'); }).toThrowError();
});
test('работа character - выброс ошибкт во втором случае', () => {
  expect(() => { new Character('Flex', 'Demon'); }).toThrowError();
});
