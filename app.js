(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		const height = canvasEl.height = window.innerHeight;
		const width = canvasEl.width = window.innerWidth;

		const settings = {
			particlesCount: 100,
			particleRadius: 4,
			particleBgColor: '#fff',
			particleDefaultSpeed: 1,
			particleAddpeed: 3,
			bgColor: '#333',
		}

		function Particle() {
			/** @property @private y */
			let y = Math.random() * height;
			/** @property x */
			let x = Math.random() * width;

			let radius = Math.random() * settings.particleRadius;

			let speed = settings.particleDefaultSpeed + Math.random()*settings.particleAddpeed;
			let angle = Math.floor(Math.random()*360);

			let d = {
				dx: Math.cos(angle)*speed,
				dy: Math.sin(angle)*speed,
			}

			let update = function(){
				reflectionMotion();
				x += d.dx;
				y += d.dy;
			}

			const reflectionMotion = function(){
				if(x > width || x <= 0){
					d.dx *= -1;
				}
				if(y > height || y <= 0){
					d.dy *= -1;
				}
			}

			this.draw = function () {
				canvas.beginPath();
				canvas.arc(x, y, radius, 0, Math.PI * 2);
				canvas.closePath();
				canvas.fillStyle = settings.particleBgColor;
				canvas.fill();
				update();
			}
		}

		const particlesArray = [...Array(settings.particlesCount)].map(() => new Particle())

		function loop(){
			canvas.fillStyle = settings.bgColor;
			canvas.fillRect(0, 0, width, height);

			particlesArray.map(el => el.draw());
			window.requestAnimationFrame(loop);
		}
		
		loop();
	}
)()