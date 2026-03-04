import { twoSum } from '../twoSum';

describe('twoSum', () => {
    it('should return true for array [2, 7, 11, 15] and target 9', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toBe(true);
    });

    it('should return true for array [3, 2, 4] and target 6', () => {
        expect(twoSum([3, 2, 4], 6)).toBe(true);
    });

    it('should return true for array [3, 3] and target 6', () => {
        expect(twoSum([3, 3], 6)).toBe(true);
    });

    it('should return false for array [1, 2, 3] and target 7', () => {
        expect(twoSum([1, 2, 3], 7)).toBe(false);
    });

    it('should return false for an empty array and any target', () => {
        expect(twoSum([], 5)).toBe(false);
    });

    it('should return false when no two numbers add up to the target', () => {
        expect(twoSum([1, 2, 4], 8)).toBe(false);
    });
});