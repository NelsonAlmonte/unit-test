import { pluck, range, remove } from './utils';

describe('utils', () => {
  describe('range', () => {
    it('should return range from 1 to 5', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
    it('should return range from 10 to 14', () => {
      expect(range(10, 14)).toEqual([10, 11, 12, 13]);
    });
  });

  describe('pluck', () => {
    it('should return the selected value', () => {
      const data = [
        { id: '1', name: 'foo' },
        { id: '2', name: 'bar' },
        { id: '3', name: 'baz' },
      ];

      expect(pluck(data, 'id')).toEqual(['1', '2', '3']);
    });
  });

  describe('remove', () => {
    it('should remove an element', () => {
      expect(remove([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
    });
  });
});
