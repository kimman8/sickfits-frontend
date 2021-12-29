import formatMoney from '../lib/formatMoney';

describe('format money function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toBe('$0.01');
    expect(formatMoney(786)).toBe('$7.86');
    expect(formatMoney(9)).toBe('$0.09');
    expect(formatMoney(40)).toBe('$0.40');
    expect(formatMoney(140)).toBe('$1.40');
  });
  it('leaves off cents with whole dollars', () => {
    expect(formatMoney(2000)).toBe('$20');
    expect(formatMoney(100)).toBe('$1');
    expect(formatMoney(50000000)).toBe('$500,000');
  });
  it('works with whole and fractional dollars', () => {
    expect(formatMoney(3455)).toEqual('$34.55');
    expect(formatMoney(101)).toEqual('$1.01');
    expect(formatMoney(110)).toEqual('$1.10');
  });
});
