window.BENCH = ((target) => {
	const createMyType = (startVal) => {
		let name = "Magic Object"
		let magic = 32
		let val = startVal

		return {
			add: (b) => {
				val += magic + b
			},

			sub: (b) => {
				val += magic - b
			},

			mul: (b) => {
				val = val * b
			},

			mod: (b) => {
				val = val % b
			},

			getVal: () => val
		}
	}

	target.closure = target.bench(createMyType)
	return target
})(window.BENCH || {})