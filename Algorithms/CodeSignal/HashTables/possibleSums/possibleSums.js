function possibleSums(coins, quantity) {
	const set = new Set([0]);

	for (const i in coins) {
		const coin = coins[i]
		const quant = quantity[i]

		for (const val of [...set]) {
			for (let j = 1; j <= quant; j++)
				set.add(val + (coin * j))
		}
	}

	return set.size - 1;
}
