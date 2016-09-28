function initTool(s) {
    this.scene = s;
}

initTool.prototype.createPlanet = function(params, ) {
    var materialMap = new THREE.MeshPhongMaterial(params);
    var ball = new THREE.SphereGeometry(1000, 100, 50);
    var meshPlanet = new THREE.Mesh(ball, materialMap);
    this.scene.add( meshPlanet );
};