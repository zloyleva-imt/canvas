(
	() => {
		const canvasEl = document.getElementById('canvas');
		const canvas = canvasEl.getContext('2d');

		const height =canvasEl.height = window.innerHeight;
		const width = canvasEl.width = window.innerWidth;

		function Particle(){
			this.y = Math.random()*height;
			this.x = Math.random()*width;

			this.radius = Math.random()*5;

			this.draw = function(){
				canvas.beginPath();
				canvas.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				canvas.closePath();
				canvas.fillStyle = '#333';
				canvas.fill();
			}
		}

		const particlesArray = [...Array(200)].map(()=>{
			let partilce = new Particle();
			partilce.draw();
			return partilce;
		})

		debugger
	}
)()