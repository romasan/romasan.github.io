"use strict";

var draw = null;

var path = "./res/";
var ext = ".jpg";

// corners
// a b   V <-
// c d   -> ^
// [a, c, d, b]

var mesh = {
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
    "c30": {
      "x": 480,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
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
    "c31": {
      "x": 480,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    },
    // ---------------------
    "c02": {
      "x": 0,
      "y": 480,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c12": {
      "x": 160,
      "y": 480,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c22": {
      "x": 320,
      "y": 480,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c32": {
      "x": 480,
      "y": 480,
      "width": 160,
      "height": 240,
      "point": {}
    }

  },
  "layers": {
    // ----------------------------------------------------------------
    "adventure-escape-game": {
      "x": 0,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": ["c00", "c01", "c11", "c10"]
    },
    "adventure-puzzle-game": {
      "x": 160,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": ["c10", "c11", "c21", "c20"]
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
    }
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

var init = function init(e) {

  draw = SVG('drawing');
  genImages();
  genRandomPoints('current');
  copyToFromAll();
  genRandomPoints('to');
  render();
  loop();
};

window.onload = init;

var genImages = function genImages(e) {

  for (var layerName in mesh.layers) {

    mesh.layers[layerName].image = draw.image(path + layerName + ext);

    mesh.layers[layerName].image.size(mesh.layers[layerName].width, mesh.layers[layerName].height);

    mesh.layers[layerName].image.x(mesh.layers[layerName].x);
    mesh.layers[layerName].image.y(mesh.layers[layerName].y);

    mesh.layers[layerName].polyline = draw.polyline();
    mesh.layers[layerName].image.clipWith(mesh.layers[layerName].polyline);
  }
};

var copyToFromAll = function copyToFromAll(point) {

  for (var regionName in mesh.regions) {
    copyToFrom(mesh.regions[regionName].point);
  }
};

var copyToFrom = function copyToFrom(point) {

  point.from = {
    x: point.current.x,
    y: point.current.y
  };
};

var genRandomPoint = function genRandomPoint(region, point) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'current';


  point.startTime = new Date().getTime();
  point.liveTime = 500 + (Math.random() * 1500 | 0); // 500 - 2000 ms.;

  point[type] = {
    x: (region.x | 0) + (Math.random() * region.width | 0),
    y: (region.y | 0) + (Math.random() * region.height | 0)
  };
};

var genRandomPoints = function genRandomPoints(type) {

  for (var regionName in mesh.regions) {

    if (!mesh.regions[regionName].point) {
      mesh.regions[regionName].point = {};
    }

    genRandomPoint(mesh.regions[regionName], mesh.regions[regionName].point, type);
  }
};

var movePoints = function movePoints(e) {

  var time = new Date().getTime();

  for (var regionName in mesh.regions) {
    movePoint(mesh.regions[regionName], mesh.regions[regionName].point, time);
  }
};

var movePoint = function movePoint(region, point, time) {

  var a = {
    x: point.to.x - point.from.x,
    y: point.to.y - point.from.y
  };

  var all = point.startTime + point.liveTime;
  var live = time - point.startTime;

  if (live < point.liveTime && live > 0) {

    var progress = 1 / point.liveTime * live;
    point.current.x = point.from.x + a.x * progress;
    point.current.y = point.from.y + a.y * progress;
  } else {
    // reset
    copyToFrom(point);
    genRandomPoint(region, point, 'to');
  }
  time - point.startTime;
};

var render = function render(e) {

  for (var layerName in mesh.layers) {

    var _corners = [];

    for (var i in mesh.layers[layerName].corners) {

      var cornerName = mesh.layers[layerName].corners[i];

      _corners.push([mesh.regions[cornerName].point.current.x, mesh.regions[cornerName].point.current.y]);
    }

    mesh.layers[layerName].polyline.plot(_corners);
  }
};

var loop = function loop(e) {

  requestAnimationFrame(loop);

  movePoints();
  render();
};

window.onhashchange = function (e) {

  var _link = document.location.hash.substr(1);
  var src = document.location.origin + '/' + _link;
  console.log('open:', src);
};

console.log('NEXT');

window.innerWidth;
window.innerHeight;

var boxMinSize = 200;
var boxMaxSize = 400;

var minWindowWidth = 400;
var minWindowHeight = 400;

var linesMin = 3;

var boxes = [];

var boxesCount = 23; // boxes.length
//# sourceMappingURL=index.js.map
