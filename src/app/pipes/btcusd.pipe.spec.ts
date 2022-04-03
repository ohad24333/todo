import { BtcusdPipe } from './btcusd.pipe';

describe('BtcusdPipe', () => {
  it('create an instance', () => {
    const pipe = new BtcusdPipe();
    expect(pipe).toBeTruthy();
  });
});
