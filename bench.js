window.BENCH = ((target) => {
	target.bench = (objectCreator) => {
		let idx = 0

		return {
			start: (amount) => {
				const objects = []
				for(let i = 0; i < amount; i++) {
					objects.push(objectCreator(i))
				}

				BENCH.objects = objects

				setInterval(() => {
					const o = objects[idx]
					o.add(12)
					o.sub(4)
					o.mul(7)
					o.mod(16)

					idx++
					document.getElementById('target-div').innerHTML = o.getVal()
				}, 10)
			},

			stop: () => {
				if(BENCH.proto.timeoutId) {
					clearInterval(BENCH.proto.timeoutId)
				}
			}
		}
	}

	return target
})(window.BENCH || {})