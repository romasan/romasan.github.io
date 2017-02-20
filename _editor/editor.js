"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// main.js

window.onload = function () {

	document.body.addEventListener('mousedown', _callback);

	// $("#draw").click(_draw);
	_draw();

	_controls();

	$("#btn-add").click(_add);
	$("#btn-new").click(setDefaults);
	$("#btn-log").click(logJson);

	$('textarea').on('focus', function () {
		this.select();
	});
};
// common.js

var eventClass = function () {
	function eventClass() {
		_classCallCheck(this, eventClass);

		this._events = {};
	}

	_createClass(eventClass, [{
		key: "on",
		value: function on(_name, _callback) {
			if (this._events[_name]) {
				this._events[_name].push(_callback);
			} else {
				this._events[_name] = [_callback];
			}
		}
	}, {
		key: "do",
		value: function _do(_name, _data) {
			if (this._events[_name]) {
				for (var i in this._events[_name]) {
					if (typeof this._events[_name][i] == "function") {
						this._events[_name][i](_data);
					}
				}
			}
		}
	}]);

	return eventClass;
}();

;

var event = new eventClass();

var layerModel = {
	"id": "string",
	"x": "int",
	"y": "int",
	"width": "int",
	"height": "int",
	"corners": "array"
};

var layerDefaults = {
	"id": "name-game",
	"x": 0,
	"y": 0,
	"width": 320,
	"height": 480
};

var data = null;
var images = {};

var _callback = function _callback(e) {

	if (e.target.className.indexOf('ui-resizable') >= 0) {

		var _changes = {
			id: e.target.id,
			width: e.target.width,
			height: e.target.height,
			x: e.target.parentNode.offsetLeft,
			y: e.target.parentNode.offsetTop
		};

		// _update(_changes.id, _changes);

		fillChanges(_changes);
	}
};

var _add = function _add() {

	var _id = $('#input-id').val();
	if (_id == '') {
		alert('ID is empty');
	} else if (mesh.layers[_id]) {
		alert('"' + _id + '" isset');
	} else {
		var _layer = {};
		for (var i in layerModel) {
			if (i != 'id' && layerModel[i] == 'int') {
				_layer[i] = $('#input-' + i).val();
			} else if (layerModel[i] == 'array') {
				_layer[i] = [];
			}
		}
		mesh.layers[_id] = _layer;
		addLayer(_id, mesh.layers[_id]);
	}
	// mesh.layers.['test-name'] = _tmp;
};

var _clear = function _clear() {
	for (var i in layerModel) {
		$('#input-' + i).prop({ value: null });
	}
};

var setDefaults = function setDefaults() {
	for (var i in layerDefaults) {
		$('#input-' + i).prop({ value: layerDefaults[i] });
	}
};

var changedForm = function changedForm() {

	_updateFromForm();
	// redraw element
};

var _update = function _update(_id, _layer) {
	if (!mesh.layers[_id]) {
		return;
	}
	for (var i in _layer) {
		if (i != 'id') {
			mesh.layers[_id][i] = _layer[i];
		}
	}
};

var updateFromForm = function updateFromForm() {
	var _form = _getForm();

	console.log('updateFromForm:', _form);

	_update(_form.id, _form);
};

var _getForm = function _getForm() {
	var _form = {};
	for (var i in layerModel) {
		_form[i] = $('#input-' + i).val();
	}
	return _form;
};
// getData.js

var getJson = function getJson() {
	return JSON.stringify(mesh, true, 2);
};

var logJson = function logJson() {

	var _json = getJson();
	// console.clear();
	// console.log(getJson());
	$('textarea').val(_json).show().select().css({ zIndex: 999 });
	$('#controls').hide();
};

var ESC_KEY = 0x1b;

window.onkeyup = function (e) {
	if (e.keyCode == ESC_KEY) {
		$('#controls').show();
		$('textarea').hide();
	}
};
// ui.js

var addLayer = function addLayer(_name, _layer) {

	$("#container").append($("<img>").prop({
		src: '../res/' + _name + '.jpg',
		id: _name
	}));
	$('#' + _name).css({
		width: _layer.width + 'px',
		height: _layer.height + 'px',
		top: _layer.y + 'px',
		left: _layer.x + 'px'
	}).resizable({
		aspectRatio: _layer.width / _layer.height,
		stop: function stop(e) {
			console.log('resize:', e);
		}
	})
	// .done(() => {alert(2);})
	.parent().draggable({
		stack: ".drag",
		grid: [10, 10],
		stop: function stop(e) {
			console.log('drag:', e);
		}
	})
	// .done(() => {alert(1);})
	.addClass("drag").css({ position: 'absolute' });
};

var _draw = function _draw() {

	// let text = $("textarea").val();
	// data = JSON.parse(text);
	images = {};

	for (var layerName in mesh.layers) {

		addLayer(layerName, mesh.layers[layerName]);
	}
};

var addControl = function addControl(attr) {

	$('#controls').append($('<div>').append($('<label>').append($('<span>').html(attr + ':')).append($('<input>').prop({
		id: 'input-' + attr,
		value: null
	}).addClass('controls-input'))));
};

var _controls = function _controls() {

	var o = {};
	for (var attr in layerModel) {

		if (layerModel[attr] == "int") {
			o[attr] = 0;
		}

		if (layerModel[attr] == "string") {
			o[attr] = "";
		}

		if (layerModel[attr] == "array") {
			o[attr] = [];
		}

		if (layerModel[attr] == "int" || layerModel[attr] == "string") {
			addControl(attr);
		}
	}

	$('.controls-input').on('change', changedForm);

	$('#controls').append($('<button>').prop({ id: 'btn-new' }).text('New'));

	$('#controls').append($('<button>').prop({ id: 'btn-add' }).text('Add'));

	// $('#controls').append(
	// 	$('<button>')
	// 		.prop({id: 'btn-upd'})
	// 		.text('Update')
	// );

	$('#controls').append($('<button>').prop({ id: 'btn-log' }).text('Log JSON'));
};

var fillChanges = function fillChanges(_changes) {

	for (var i in _changes) {
		$('#input-' + i).prop({ value: _changes[i] });
	}
};
//# sourceMappingURL=index.js.map
