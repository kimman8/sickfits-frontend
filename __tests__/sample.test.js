function add(a, b) {
  const aNum = parseInt(a);
  const bNum = parseInt(b);
  return aNum + bNum;
}

describe('sample test 101', () => {
  it('works as expected', () => {
    expect(1).toEqual(1);
  });
  it('runs the add function properly', () => {
    expect(9).toBeGreaterThanOrEqual(add(4, 5));
  });
  it('add strings of numbers', () => {
    expect(add('1', '2')).toBe(3);
  });
});
