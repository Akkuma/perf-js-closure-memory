window.BENCH = ((target) => {
	const baseObejct = {
		add: function(b) {
			this.val += this.magic + b
		},

		sub: function(b) {
			this.val += this.magic - b
		},

		mul: function(b) {
			this.val = this.val * b
		},

		mod: function(b) {
			this.val = this.val % b
		},

		getVal: function() {
			return this.val
		},
	}

	const createMyType = (startVal) => {
		return Object.create(baseObejct, {
			name: {
				writable: true,
				value: "Magic Object",
			},
			magic: {
				writable: true,
				value: 32,
			},
			val: {
				writable: true,
				value: startVal,
			},
		})
	}

	target.create = target.bench(createMyType)
	return target
})(window.BENCH || {})
