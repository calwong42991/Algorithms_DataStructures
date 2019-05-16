function findProfession(level, pos) {
    var isEngineer = 1,
        x = (pos - 1) % (1 << (level - 1)); // move `pos` inside tree
    while (x > 0) {
        isEngineer ^= x & 1;
        x >>= 1;
    }
    return isEngineer ? 'Engineer' : 'Doctor';
}
