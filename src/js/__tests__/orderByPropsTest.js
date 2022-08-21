import orderByProps from '../orderByProps';

test.each([
  [{
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['level', 'defence'], [
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ]],
  [{
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name'], [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ]],
  [{
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, [], [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]],
])('testeing orderByProps function with %o character and %l fisrtPropsArray and %l expected', (character, fisrtPropsArray, expected) => {
  const result = orderByProps(character, fisrtPropsArray);
  expect(result).toEqual(expected);
});
