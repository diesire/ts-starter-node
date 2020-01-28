import { hi, Greeter } from '../main';

describe('Hello', () => {
  it('should pass', () => {
    expect(hi()).toEqual('Hello');
  });

  it('should be debugeable', () => {
    expect(new Greeter().hi()).toEqual('Hello');
  });
});
