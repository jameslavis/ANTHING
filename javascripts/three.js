var camera,scene,renderer,geometry,material;
var cube,stats;
var controls;
var clock=new THREE.Clock();
//this function is the main scene of the game
function mainScene(){
	scene=new THREE.Scene();
	camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
	camera.position.z=5;
	/*if(camera==cube){
		break;
	}*/
	renderer= new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);
	/*controls = new THREE.FirstPersonControls(camera,renderer.domElement);
	controls.movemenSpeed=1000;
	controls.lookSpeed=0.1;
	stats=new Stats();
	document.body.appendChild(stats.dom);*/
	box();
	playermodel();
	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( 10, 0, 25 );
	scene.add( light );

	var animate=function(){
	requestAnimationFrame(animate);
	cube.rotation.x+=0.01;
	cube.rotation.y+=0.01;
	cubemodel.rotation.x+=0.01;
	cubemodel.rotation.y+=0.01;
	//controls.update( //clock.getDelta() );
	//stats.update();
	renderer.render(scene,camera);
	};
	animate();
	var gui = new dat.GUI();
var cameraGui = gui.addFolder("camera position");
cameraGui.add(camera.position, 'x');
cameraGui.add(camera.position, 'y');
cameraGui.add(camera.position, 'z');
cameraGui.open();

var cameraGui = gui.addFolder("camera projection");
cameraGui.add(camera, "fov");
cameraGui.open();

var lightGui = gui.addFolder("light position");
lightGui.add(light.position, 'x');
lightGui.add(light.position, 'y');
lightGui.add(light.position, 'z');
lightGui.open();

var cubeGui = gui.addFolder("cube position");
cubeGui.add(cube.position, 'x');
cubeGui.add(cube.position, 'y');
cubeGui.add(cube.position, 'z');
//cubeGui.add(cube.rotation,'x');
//cubeGui.add(cube.rotation,'y');
//cubeGui.add(cube.rotation,'z');
cubeGui.open();
}

function box(){
	geometry=new THREE.BoxGeometry(1,1,1);
	material=new THREE.MeshLambertMaterial({color:0xfd59d7,wireframe:false});
	cube= new THREE.Mesh(geometry,material);
	scene.add(cube);
	camera.position.z = 5;
	
}
function playermodel(){
	geometry=new THREE.BoxGeometry(1,1,1);
	material=new THREE.MeshBasicMaterial({color:0xfd59d7,wireframe:true});
	cubemodel=new THREE.Mesh(geometry,material);
	scene.add(cubemodel);
}




	

