let init = ()=>{

	draw = SVG('drawing');
	genImages();
	genRandomPoints('current');
	copyToFromAll();
	genRandomPoints('to');
	render();
	loop();
};
window.onload = init;

let genImages = ()=>{

	for(var layerName in mesh.layers) {
		
		mesh.layers[layerName].image = draw.image(path + layerName + ext);
		
		mesh.layers[layerName].image.size(
			mesh.layers[layerName].width,
			mesh.layers[layerName].height
		);
		
		mesh.layers[layerName].image.x(mesh.layers[layerName].x);
		mesh.layers[layerName].image.y(mesh.layers[layerName].y);
		
		mesh.layers[layerName].polyline = draw.polyline();
		mesh.layers[layerName].image.clipWith(mesh.layers[layerName].polyline);
	}
}

let copyToFromAll = (point)=>{

	for(let regionName in mesh.regions) {
		copyToFrom(mesh.regions[regionName].point);
	}
};

let copyToFrom = (point)=>{

	point.from = {
		x: point.current.x,
		y: point.current.y
	}
}

let genRandomPoint = function(region, point, type='current') {

	point.startTime = new Date().getTime();
	point.liveTime = 500 + (Math.random() * 1500 | 0);// 500 - 2000 ms.;

	point[type] = {
		x: (region.x | 0) + ((Math.random() * region.width ) | 0),
		y: (region.y | 0) + ((Math.random() * region.height) | 0)
	};
};

let genRandomPoints = function(type) {

	for(let regionName in mesh.regions) {

		if(!mesh.regions[regionName].point) {
			mesh.regions[regionName].point = {};
		}
		
		genRandomPoint(mesh.regions[regionName], mesh.regions[regionName].point, type);
	}
};

let movePoints = ()=>{
	
	let time = new Date().getTime();

	for(let regionName in mesh.regions) {
		movePoint(mesh.regions[regionName], mesh.regions[regionName].point, time)
	}

}

let movePoint = (region, point, time)=>{

	let a = {
		x: point.to.x - point.from.x,
		y: point.to.y - point.from.y
	}

	let all = point.startTime + point.liveTime;
	let live = time - point.startTime;

	if(live < point.liveTime && live > 0) {

		let progress = 1 / point.liveTime * live
		point.current.x = point.from.x + a.x * progress;
		point.current.y = point.from.y + a.y * progress;
	} else {
		// reset
		copyToFrom(point);
		genRandomPoint(region, point, 'to');
	}
	time - point.startTime
};

var render = function() {
		
		for(let layerName in mesh.layers) {
		
			let _corners = [];
			
			for(let i in mesh.layers[layerName].corners) {

				let cornerName = mesh.layers[layerName].corners[i];

				_corners.push([
					mesh.regions[cornerName].point.current.x,
					mesh.regions[cornerName].point.current.y
				]);
			}
			
			mesh.layers[layerName].polyline.plot(_corners);
		}
};

var loop = function() {
	
	requestAnimationFrame(loop);

	movePoints();
	render();
};

window.onhashchange = ()=>{
	
	var _link = document.location.hash.substr(1);
	let src =  document.location.origin + '/' + _link;
	console.log('open:', src);
}
