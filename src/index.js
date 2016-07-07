class main {
	
	constructor() {
		console.log(777);
	}
}

window.onload = ()=>{new main();};

var regions = {
  a: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  },
  b: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  },
  c: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  },
  d: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  },
  e: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  },
  f: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  }
};

// let points = {
//   a: {x: 0, y: 0},
//   b: {x: 0, y: 0},
//   c: {x: 0, y: 0},
//   d: {x: 0, y: 0},
//   e: {x: 0, y: 0},
//   f: {x: 0, y: 0}
// };

var layers = {
  "adventure-escape-game": {
    x: 0,
    y: 0,
    width: 320,
    height: 640,
    corner: {
      nw: "a",
      sw: "b",
      se: "d",
      ne: "e"
    }
  }
};

// var genRandomPoints = function() {
//  for(let i in regions) {
//    points[i] = {
//      x: (regions[i].x|0) + ((Math.random() * region[i].width)|0),
//      y: (regions[i].y|0) + ((Math.random() * region[i].height)|0)
//    };
//  }
//};

// create svg drawing
var draw = SVG('drawing');

var path = "./res/";
var ext = ".jpg"

for(var layerName in layers) {
  layers[layerName].image = draw.image(path + layerName + ext);
  layers[layerName].image.size(
    layers[layerName].width,
    layers[layerName].height
  );
  layers[layerName].image.x(layers[layerName].x);
  layers[layerName].image.y(layers[layerName].y);
  layers[layerName].polyline = draw.polyline([[0,0], [100,50], [50,200]]);
  layers[layerName].clipWith(layers[layerName].polyline);
}

var names = [
  "adventure-escape-game",
  "adventure-puzzle-game",
  "box5",
  "Candy Jump",
  "closedchain",
  "Dynamite Game",
  "Finger maZe 2",
  "Finger Ski",
  "Finger snowboard",
  "FROG JUMP (jump jump jump)",
  "GHOSTS",
  "hexagon",
  "lasergame (lazor game)",
  "lightnet",
  "Match 3 (ballshelf)",
  "match 3 firewall (bubble rush in fire)",
  "Match six (Hex Jewels)",
  "platformer (Platformer HD) (на основе Runaway HD)",
  "Platformer Shooter",
  "plumbing (Plumber Flow)",
  "pointsgame (Flow Connection Future)",
  "pointsgame",
  "runner (Run Fast) индиана джонс",
  "tank game",
  "threecolor (Shift It Fast)",
  "threecolor (Sliding Blocks)",
  "UPD lightnet",
  "webgame (untangle web)",
  "zuma (Arcanoid Break Classic)",
  "Zuma Deluxe"
];

var render = function() {
    for(var i in layers) {
      layers[i].polyline.plot([[0,0], [0,100], [100,100], [100,50]]);
    }
};

var loop = function() {
  requestAnimationFrame(loop);
  render();
};
loop();

window.onhashchange(function() {
  var _link = document.location.hash.substr(1);
})
