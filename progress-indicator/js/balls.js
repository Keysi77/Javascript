{
	let canvas = { "root": document.getElementById("canvas") }
	canvas.width = canvas.root.width;
	canvas.height = canvas.root.height;

	let ctx = canvas.root.getContext("2d");

	let Ball = function () {
		this.colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
		this.x = Math.floor(Math.random() * canvas.width)
		this.y = Math.floor(Math.random() * canvas.width)
		this.size = Math.floor(Math.random() * canvas.width / 10)
		this.xSpeed = -Math.random() * 5
		this.ySpeed = Math.random() * 5
		this.color = this.colors[Math.floor(Math.random() * parseInt(this.colors.length))]
	}

	let circle = function (x, y, radius, filled) {
		ctx.beginPath()
		ctx.arc(x, y, radius, 0, Math.PI * 2, false)
		if (filled) ctx.fill()
		else ctx.stroke()
	}

	Ball.prototype.draw = function () {
		circle(this.x, this.y, this.size, true)
	}

	Ball.prototype.move = function () {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	Ball.prototype.collide = function () {
		if (this.x < 0 || this.x > canvas.width) {
			this.xSpeed = -this.xSpeed;
		}
		if (this.y < 0 || this.y > canvas.height) {
			this.ySpeed = -this.ySpeed;
		}
	}

	let balls = []
	for (i = 0; i < 20; i++) {
		balls.push(new Ball())
	}


	/* function repeatOften() {

		ctx.clearRect(0, 0, canvas.width, canvas.height)

		for (i = 0; i < balls.length; i++) {
			ctx.fillStyle = balls[i].color
			balls[i].draw()
			balls[i].move()
			balls[i].collide()
		}

		ctx.strokeRect(0, 0, canvas.width, canvas.height)

		requestAnimationFrame(repeatOften);
	}
	requestAnimationFrame(repeatOften); */


	setInterval(function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		for (i = 0; i < balls.length; i++) {
			ctx.fillStyle = balls[i].color
			balls[i].draw()
			balls[i].move()
			balls[i].collide()
		}

		ctx.strokeRect(0, 0, canvas.width, canvas.height)
	})
	// }, 16)
}