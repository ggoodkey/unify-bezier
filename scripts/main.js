import MakerJs from "makerjs";

var output = document.getElementById('output');
var svgOutput = document.getElementById('svg');

var curves = {
  models:{
    curve1: new MakerJs.models.BezierCurve([0,0],[25,35],[30,-10],[50,0]),
	  curve2: new MakerJs.models.BezierCurve([50,0],[75,35],[80,-10],[100,0])
  }
};

MakerJs.model.findChains(curves, function (chains, loose, layer, ignored) {
  for (var a = 0; a < chains.length; a++) {
    for (var b = 0; b < chains[a].links.length; b++) {
      output.innerHTML += '<li>path type: ' + chains[a].links[b].walkedPath.pathContext.type + '</li>';
    }
  }
}.bind(this), { unifyBeziers: true });

svgOutput.innerHTML = MakerJs.exporter.toSVG(curves, { scale: 2, origin: [50,25] });