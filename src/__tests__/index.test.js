import sortCharacter from '../index';

test('sort charaters1', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const recieved = sortCharacter(characters);

  expect(recieved).toEqual(expected);
  expect(recieved).not.toBe(expected);
});

test('sort charaters2', () => {
  const characters = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const recieved = sortCharacter(characters);

  expect(recieved).toEqual(expected);
  expect(recieved).not.toBe(expected);
});

test('sort charaters3', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const recieved = sortCharacter(characters);

  expect(recieved).toEqual(expected);
  expect(recieved).not.toBe(expected);
});
