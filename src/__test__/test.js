import GameSavingLoader from '../gamesavingloader.js';

test('test', async () => {
  const obj = await GameSavingLoader.load()
  .then((data) => {
    expect(data.id).toBe(9);
  });
});
