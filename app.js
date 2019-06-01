(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		const height = canvasEl.height = window.innerHeight;
		const width = canvasEl.width = window.innerWidth;

		function Particle() {
			/** @property @private y */
			let y = Math.random() * height;
			/** @property x */
			let x = Math.random() * width;

			let radius = Math.random() * 5;

			let speed = 1 + Math.random()*4;
			let angle = Math.floor(Math.random()*360);

			let d = {
				dx: Math.cos(angle)*speed,
				dy: Math.sin(angle)*speed,
			}

			let update = function(){
				x += d.dx;
				y += d.dy;
			}

			this.draw = function () {
				canvas.beginPath();
				canvas.arc(x, y, radius, 0, Math.PI * 2);
				canvas.closePath();
				canvas.fillStyle = '#333';
				canvas.fill();
				update();
			}
		}

		const particlesArray = [...Array(200)].map(() => new Particle())

		function loop(){
			canvas.fillStyle = '#aaa';
			canvas.fillRect(0, 0, width, height);

			particlesArray.map(el => el.draw());
			window.requestAnimationFrame(loop);
		}
		
		loop();
	}
)()