var draw = null;

var path = "./res/";
var ext = ".jpg"

// corners
// a b   V <-
// c d   -> ^
// [a, c, d, b]

let mesh = {
  "regions": {
		"c00": {
      "x": 0,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c10": {
      "x": 160,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c20": {
      "x": 320,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
    },
		"c30" : {
			"x" : 480,
			"y" : 0,
			"width" : 160,
			"height" : 240,
			"point" : {}
		},
		// --------------------
    "c01": {
      "x": 0,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c11": {
      "x": 160,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c21": {
      "x": 320,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    },
		"c31" : {
			"x" : 480,
			"y" : 240,
			"width" : 160,
			"height" : 240,
			"point" : {}
		},
		// ---------------------
		"c02" : {
			"x" : 0,
			"y" : 480,
			"width" : 160,
			"height" : 240,
			"point" : {}
		},
		"c12" : {
			"x" : 160,
			"y" : 480,
			"width" : 160,
			"height" : 240,
			"point" : {}
		},
		"c22" : {
			"x" : 320,
			"y" : 480,
			"width" : 160,
			"height" : 240,
			"point" : {}
		},
		"c32" : {
			"x" : 480,
			"y" : 480,
			"width" : 160,
			"height" : 240,
			"point" : {}
		}
		
  },
  "layers": {
// ----------------------------------------------------------------
    "adventure-escape-game": {
      "x": 0,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": [
        "c00", "c01", "c11", "c10"
      ]
    },
    "adventure-puzzle-game": {
      "x": 160,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": [
        "c10", "c11", "c21", "c20"
      ]
    },
    "closed-chain-game": {
      "x": 320,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": ["c20", "c21", "c31", "c30"]
    },
    "box-five-game": {
      "x": 0,
      "y": 240,
      "width": 320,
      "height": 480,
      "corners": ["c01", "c02", "c12", "c11"]
    },
    "dynamite-game": {
      "x": 160,
      "y": 240,
      "width": 320,
      "height": 480,
      "corners": ["c11", "c12", "c22", "c21"]
    },
/*
    "avatar": {
      "width": 1008,
      "height": 1008,
      "orientation": "vertical",
      "x": 0,
      "y": 0,
      "corners": []
    },
    "adventure-escape-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "adventure-puzzle-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "arkanoid-break-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "box-five-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "bubble-rush-in-fire-game": {
     "width": 646,
     "height": 999,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "closed-chain-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "dynamite-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "finger-maze-game": {
     "width": 640,
     "height": 948,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "flow-connection-game": {
     "width": 640,
     "height": 1004,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "ghosts-game": {
     "width": 568,
     "height": 320,
     "orientation": "landscape",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "hexagon-game": {
     "width": 640,
     "height": 948,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "hex-jewels-game": {
     "width": 646,
     "height": 999,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "laser-game": {
     "width": 640,
     "height": 948,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "light-flow-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "platformer-shooter-game": {
     "width": 950,
     "height": 558,
     "orientation": "landscape",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "plumber-flow-game": {
     "width": 640,
     "height": 1004,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "points-game": {
     "width": 640,
     "height": 786,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "run-fast-game": {
     "width": 950,
     "height": 558,
     "orientation": "landscape",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "shift-it-fast-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "sliding-blocks-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "tanks-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "untangle-web-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },*/
// ----------------------------------------------------------------
  }
};
// "hexagon-game": {},
// "lazer-game": {},
// "tanks-game": {},
// "untangle-web-game": {}
