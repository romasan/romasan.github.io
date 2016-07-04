var images = {
  "name": {
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

var points = {};

// var genRandomPoints = ()=>{
//  for(let i in regions) {
//    points[i] = {
//      x: (regions[i].x|0) + ((Math.random() * region[i].width)|0),
//      y: (regions[i].y|0) + ((Math.random() * region[i].height)|0)
//    };
//  }
//};

// create svg drawing
var draw = SVG('drawing')

        // create image
        var image1 = draw.image('./res/adventure-escape-game.jpg')
        var image2 = draw.image('./res/adventure-puzzle-game.jpg')
        image1.size(320, 480);//.x(320).y(100)
        image2.size(320, 480).x(320);//.y(100)

        var group = draw.group()

        // create text
//         var text = draw.text('SVG.JS').move(300, 0)
//         text.font({
//           family: 'Source Sans Pro'
//         , size: 180
//         , anchor: 'middle'
//         , leading: 1
//         })
        
        var polyline1 = draw.polyline([[0,0], [100,50], [50,200]]);
        var polyline2 = draw.polyline([[320,0], [420,50], [370,200]]);

        group.add(polyline1);
        group.add(polyline2);

        // clip image with text
        image1.clipWith(polyline1);
        image2.clipWith(polyline2);

        polyline1.animate('1s').plot([[0,0], [0,100], [100,100], [100,50]])
        polyline2.animate('4s').plot([[0,0], [0,100], [100,100], [100,50]]);

        group.animate().afterAll(function(){
          alert(7)
        });



var path = "res/";
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
var ext = ".jpg"
