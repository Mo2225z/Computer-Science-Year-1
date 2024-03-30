// Global letiables that will store the toolbox colour palette
// and the helper functions.
let toolbox = null;
let colourP = null;
let helpers = null;


function setup() {
     
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	let c = createCanvas(canvasContainer.size().width, canvasContainer.size().height = 495);
	c.parent("#content");
	//create helper functions and the colour palette
    helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCan());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new  Eraser());
    toolbox.addTool(new  Stamp());
    toolbox.addTool(new  Spiragraph());
    toolbox.addTool(new  Trail());   

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}
