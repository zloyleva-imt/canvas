(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		const height =canvasEl.height = window.innerHeight;
		const width = canvasEl.width = window.innerWidth;

		debugger

		function Particle(){
			this.x = Math.random()*height;
			this.y = Math.random()*width;
		}
		debugger

		let p1 = new Particle();
		let p2 = new Particle();
		let p3 = new Particle();

		debugger
	}
)()