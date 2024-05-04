import { worksFormat } from './works-format';

describe('worksFormat', () => {
  it('should return to `Woow! The cart page works!`', () => {
    expect(worksFormat('cart')).toEqual('Woow! The cart page works!');
  });
});
