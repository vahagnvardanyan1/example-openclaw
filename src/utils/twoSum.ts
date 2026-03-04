export function twoSum(numbers: number[], target: number): boolean {
    const numSet = new Set<number>();

    for (const num of numbers) {
        const complement = target - num;
        if (numSet.has(complement)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}