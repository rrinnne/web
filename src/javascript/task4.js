function Sum(nums, target) {
    const numIndices = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (numIndices.has(diff)) {
            return [numIndices.get(diff), i];
        }

        numIndices.set(nums[i], i);
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = Sum(nums, target);
console.log(result);  