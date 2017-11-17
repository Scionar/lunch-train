import getAllTrains from './get-all-trains';

describe('getAllTrains', () => {
  const testingData = [
    {
      restaurant: 'Sushi bar',
      driver: 'Testuser',
      startTime: '11:15'
    }
  ];

  it('returns an array', () => {
    const result = getAllTrains();
    expect(Array.isArray(result)).toBe(true);
  });

  it('takes testing data as a parameter and returns it', () => {
    const result = getAllTrains(testingData);
    expect(result).toEqual(testingData);
  });
});
