const searchRange = (nums, target) => {

    const low = 0;
    const high = nums.length - 1;

    const firstOccurence = (low, high) => {
        if (low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            if ((mid === 0 || nums[mid - 1] < target) && nums[mid] === target) {
                return mid;
            } else if (target > nums[mid]) {
                return firstOccurence(mid + 1, high);
            } else {
                return firstOccurence(low, mid - 1);
            }
        }
        return -1;
    };

    const lastOccurence = (low, high) => {
        if (low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            if (
                (mid === nums.length - 1 || nums[mid + 1] > target) &&
                nums[mid] === target
            ) {
                return mid;
            } else if (target < nums[mid]) {
                return lastOccurence(low, mid - 1);
            } else {
                return lastOccurence(mid + 1, high);
            }
        }
        return -1;
    };

    
    const first = Math.max(-1, firstOccurence(0, high));
    const last = Math.max(-1, lastOccurence(0, high));

    return [first, last];
};


let arr = [1, 1, 1, 1, 2, 3];

console.log(searchRange(arr, 1));