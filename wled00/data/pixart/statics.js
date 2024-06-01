//elements in layout order



var lSS  = gId("ledSetupSelector"); // Led setup:
var frm = gId("formatSelector"); // Output format:
var cFS = gId("colorFormatSelector"); // Color code format:
var aS = gId("addressingSelector"); // Addressing:
var brgh = gId("brightnessNumber"); // Brightness:
    var brgV = gId("brightnessValue");
var cLN = gId("colorLimitNumber"); // Max no of colors/JSON:
    var cLV = gId("colorLimitValue");
var gurl = gId('curlUrl'); // Device IP/host name:

var sID = gId('segID'); // display:none (defaults for indexing are handled)
var tSg = gId('targetSegment'); // Target segment id:

/*
tSg targets a segment that has been previously defined and saved on the Segments page.?
sID in another case(?) is an integer, meaning at which segment the image pixel values can start turning into the right amount of RGB pixel values (image resolution and image scaling is available)
*/

var sSg = gId("getSegmentsSVG"); 
var seDiv = gId("getSegmentsDiv")


var scDiv = gId("scaleDiv"); // Toggle 'Scale image'
var szDiv = gId("sizeDiv");  // Set width and height to those of the panels (in pixels)
var szX = gId("sizeX"); 
var szY = gId("sizeY");
/* dropZone is handled and declared in pixart.js, bc of special event listeners */


var prw = gId("preview");
var JLD = gId('JSONled'); // textarea with the result

var cjb = gId("copyJSONledbutton"); // Copy to clipboard
var sjb = gId("sendJSONledbutton"); // Send to device

var canvas = gId('pixelCanvas'); 

var haIDe = gId("haID");
var haUe = gId("haUID");
var haNe = gId("haName");


var imin = gId('image-info');
var imcn = gId('image-container');
var bcn = gId("button-container");
var im = gId('image');
//var ss = gId("sendSvgP");
var w = window;


//vars
var httpArray = [];
var fileJSON = '';

var hideableRows = d.querySelectorAll(".ha-hide");
for (var i = 0; i < hideableRows.length; i++) {
  hideableRows[i].classList.add("hide");
}

var accentColor = '#eee';
var accentTextColor = '#777';
var prsCol = '#ccc';
var greenColor = '#056b0a';
var redColor = '#6b050c';

var scaleToggleOffd = "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z";
var scaleToggleOnd = "M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z";

