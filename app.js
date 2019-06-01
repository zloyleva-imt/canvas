(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		const height =canvasEl.height = window.innerHeight;
		const width = canvasEl.width = window.innerWidth;

		function Particle(){
			this.x = Math.random()*height;
			this.y = Math.random()*width;

			this.radius = 10;

			this.draw = function(){
				canvas.beginPath();
				canvas.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				canvas.closePath();
				canvas.fillStyle = '#333';
				canvas.fill();
			}
		}

		let p1 = new Particle();
		let p2 = new Particle();
		let p3 = new Particle();
		
		p1.draw()
		p2.draw()
		p3.draw()
		debugger
	}
)()