import MakerJs from "makerjs";

var models = {};
models.curve = {
  models:{
    curve1: new MakerJs.models.BezierCurve([0,0],[25,35],[30,-10],[50,0]),
	curve2: new MakerJs.models.BezierCurve([50,0],[75,35],[80,-10],[100,0])
  }
};

MakerJs.model.findChains(models.curve, function (chains, loose, layer, ignored) {
  for (var a = 0; a < chains.length; a++) {
    for (var b = 0; b < chains[a].links.length; b++) {
      console.log(chains[a].links[b].walkedPath.pathContext.type);
    }
  }
}.bind(this), { unifyBeziers: true });