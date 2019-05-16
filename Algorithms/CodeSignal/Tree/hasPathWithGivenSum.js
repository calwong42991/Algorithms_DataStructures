function hasPathWithGivenSum(t, s) {
    if (!t) return false;
    s -= t.value;
    if (!t.left && !t.right) {
        return s === 0;
    }
    return hasPathWithGivenSum(t.left, s) || hasPathWithGivenSum(t.right, s);
}
