(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		canvasEl.height = window.innerHeight;
		canvasEl.width = window.innerWidth;
	}
)()