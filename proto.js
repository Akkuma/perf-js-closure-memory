window.BENCH = ((target) => {
	const MyType = function(startVal) {
		this.val = startVal
		this.name = "Magic Object"
		this.magic = 32
	}

	MyType.prototype.add = function(b) {
		this.val += this.magic + b
	}

	MyType.prototype.sub = function(b) {
		this.val += this.magic - b
	}

	MyType.prototype.mul = function(b) {
		this.val = this.val * b
	}

	MyType.prototype.mod = function(b) {
		this.val = this.val % b
	}

	MyType.prototype.getVal = function() {
		return this.val
	}


	target.proto = target.bench((val) => new MyType(val))
	return target
})(window.BENCH || {})