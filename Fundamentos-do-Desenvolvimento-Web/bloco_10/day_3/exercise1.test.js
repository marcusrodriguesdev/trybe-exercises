const service = require('./exercise1');

describe('check call randomNumber function', () => {
  test('Test whether the function was called, what its return and how many times it was called', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});
