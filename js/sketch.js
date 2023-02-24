let libs = ['https://unpkg.com/p5.tween/dist/p5.tween.min.js']
let tween
let people1
let people2
let love1
let love2
let fashion1
let fashion2
let activeimg
let imgs = []
let letters = []
let activeLetters = 0
let startX = 100
let startY = 170
let ar 

const myShape = {
	x: startX,
	y: startY,
	w: 200,
	h: 200
}


function preload() {
	people1 = loadImage('data/image/people1.png')
	people2 = loadImage('data/image/people2.png')
	love1 = loadImage('data/image/apple2.png')
	love2 = loadImage('data/image/love2.png')
	fashion1 = loadImage('data/image/fashion1.png')
	fashion2 = loadImage('data/image/fashion4.png')
	imgs.push(people1)
	imgs.push(people2)
	imgs.push(love1)
	imgs.push(love2)
	imgs.push(fashion1)
	imgs.push(fashion2)
}

function setup() {
	
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	// background(0, 0, 0)
	// background(0, 0, 0)
	createCanvas(895, 1280)
	tween = p5.tween.manager.addTween(myShape)
	motionP1()
	activeimg = random(imgs)
	letters.push(motionP1)
	letters.push(motionO)
	letters.push(motionP2)
	tween.startTween()
}

function draw() {
	clear()
	ar.reset()
	// ar.scale(.8)
	if(!tween.active) {
		tween.resetMotions()
		myShape.x = startX
		myShape.y = startY
		activeLetters++
		ar.clear()
		letters[activeLetters % 3]()
		tween.startTween()
	}
	// background(0)

	noCursor()
	ar.push()
	// translate(-width/2, -height*.3)

	let loopCount = 15
	for(let d = 0; d < loopCount; d++) {
		let scl = .14 //frameCount*.001%3
		ar.image(activeimg, myShape.x + d * 5, myShape.y + sin(d * .4 + frameCount * .35) * 30, myShape.w, myShape.h)
	}
	ar.pop()
	image(ar,0,0)
}


function motionP1() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: '520' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170},
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850},
      ], 1000)

}

function motionO() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 600 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: '850' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170},
      ], 1000)
  
}

function motionP2() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: '520' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170},
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850},
      ], 1000)

}

