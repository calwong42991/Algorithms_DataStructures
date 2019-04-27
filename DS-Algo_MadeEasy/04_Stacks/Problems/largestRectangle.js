const largestRectangleAreaBruteForce = (histogram) => {
    let maxArea = 0;

    for (let left = 0; left < histogram.length; left++) {
        for (let right = left; right < histogram.length; right++) {
            let min = Number.POSITIVE_INFINITY;

            for (let i = left; i <= right; i++) {
                min = Math.min(min, histogram[i]);
            }

            let area = min * (right - left + 1);
            maxArea = Math.max(area, maxArea);
        }
    }
    return maxArea;
}

const largestRectangleArea = (histogram) => {
    if (histogram.length === 0) {
        return 0;
    };

    let stack = [];
    let max = 0;

    for (let i = 0; i <= histogram.length; i++) {
        let cur = (i === histogram.length) ? -1 : histogram[i];

        while (stack.length !== 0 && cur < histogram[stack[stack.length - 1]]) {
            let index = stack.pop();
            let h = histogram[index];
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, h * w);
        }
        stack.push(i);
    }
    return max;
}

console.log(largestRectangleAreaBruteForce([2, 1, 5, 6, 2, 3]));