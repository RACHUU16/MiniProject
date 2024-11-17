//Declaration of all appliance arrays. Used in functions ahead to print print comtent and also to compare using for loops 

var fridgeNames = ["HRF-628AF6 Side-by-Side", "HRF-216ECS E Star Series", "GR-J33FWCHL 4-Door", "RSH7ZNPN1 Side-by-Side"];
var fridgeBrands = ["Haier", "Haier", "LG", "Samsung"];
var fridgeImages = ["fridge-haier.jpg", "fridge-haier-refrig.jpg", "fridge-lg.jpg", "fridge-samsung.jpg"];

var fridgeDetails = ["Cooling System:", "Total Net Capacity(l):", "Unit Dimensions(H*W*L)mm:", "Voltage(V):", "Temperature of Fridge:", "Door Hinge:"];

var fridgeHaierDetails = ["No Frost", "540", "1780 x 910 x 730", "187V-252V", "0°C-7°C", "Side-by-Side"];
var fridgeHaierRefrigDetails = ["Direct Cooling", "186", "1240 x 550 x 540", "240V", "5°C", "Right"];
var fridgeLgDetails = ["Multi Flow", "680", "1797 x 912 x 923", "187V-252V", "0°C-7°C", "4-Door"];
var fridgeSamsungDetails = ["Twin Cooling Plus", "515", "1789 x 710 x 692", "220V", "0°C-7°C", "Side-by-Side"];

var microwaveNames = ["DW-162 HZP Microwave", "HGN-2590EGT Microwave", "MS2595DIS NeoChef", "MS23F301EAK Microwave"];
var microwaveBrands = ["Dawlance", "Haier", "LG", "Samsung"];
var microwaveImages = ["microwave-dawlance.jpg", "microwave-haier.jpg", "microwave-lg.jpg", "microwave-samsung.jpg"];

var microwaveDetails = ["Capacity:", "Weight(kg):", "Unit Dimensions(H*W*L)mm:", "Voltage(V):", "Power(W):", "Child Lock:" ];

var microwaveDawlanceDetails = ["62", "34", "621 x 499 x 346", "225V", "1200W", "No"];
var microwaveHaierDetails = ["25", "14.5", "483 x 420 x 281", "230V", "1000W", "Yes"];
var microwaveLgDetails = ["25","16", "472 x 286 x 361", "230V", "1100W", "No"];
var microwaveSamsungDetails = ["23", "12", "489 x 275 x 384", "220V", "1150", "Yes"];

var dispenserNames = ["WD 1041 SR Water Dispenser", "HWD-3025D Water Dispenser", "WHS76UW2 Water Dispenser"];
var dispenserBrands = ["Dawlance", "Haier", "LG"];
var dispenserImages = ["water-dispenser-dawlance.png", "water-dispenser-haier.jpg", "water-dispenser-lg.jpg"];

var dispenserDetails = ["Type:", "Water Supply(l):", "Weight(kg):", "Unit Dimensions(H*W*L)mm:", "Power Supply:", "Filter Stages:"];

var dispenserDawlanceDetails = ["Floor Standing","17", "28", "340 x 434 x 1155", "225W", "2"];
var dispenserHaierDetails = ["Floor Standing","7.5+", "21", "Unspecified", "80W-500", "3"];
var dispenserLgDetails = ["Floor Standing","16", "32", "360 x 469 x 1278", "230-240W", "4"];

var factoryNames = ["HR7761/00 Food Processor", "HR7627/00 Food Processor", "DWFP-1200 Food Processor"];
var factoryBrands = ["Philips", "Philips", "Dawlance"];
var factoryImages = ["food-factory-philips-daily.png", "food-factory-philips-viva.png", "food-factory-dawlance.jpg"];

var factoryDetails = ["Color:", "Capacity(l):", "Functions:", "Power Supply(W):", "Speed Settings:", "Materials:"];

var factoryPhilpsVivaDetails = ["Grey", "2.1l", "28+", "1200W", "4", "Stainless Steel"];
var factoryPhilipsDailyDetails = ["Grey", "2.1l", "15+", "650W", "2 speeds + Pulse", "Stainless Steel S"];
var factoryDawlanceDetails = ["Black/Grey", "1.8l", "12+", "1200W", "4", "Stainless Steel"];

var ACNames = ["LVS Air Conditioner", "HSU-12LK03E Air Conditioner", "AR5500M Wall Mount AC", "I32KEC Air Conditioner"];
var ACBrands = ["Dawlance", "Haier", "LG", "Samsung"];
var ACImages = ["air-conditioner-dawlance.png", "air-conditioner-haier.jpg", "air-conditioner-lg.jpg", "air-conditioner-samsung.jpg"];

var ACDetails = ["Inverter:", "Capacity(tons):", "Max Room Size:", "Capacity(btu/hr):", "Power(W):", "Air Purification:"];

var ACDawlanceDetails = ["Yes", "2", "250 sq ft.", "21,300", "1200W", "Yes"];
var ACHaierDetails = ["No", "1", "100 sq ft.", "14,500", "1100W", "No"];
var ACLgDetails = ["Yes", "3", "300 sq ft.", "28,000", "2920W", "Yes"];
var ACSamsungDetails = ["Yes", "2", "250 sq ft.", "21,300", "1200W", "Yes"];

var ironNames = ["HSR-2119 (Green) Iron", "PerfectCare Azur Steam Iron "];
var ironBrands = ["Haier", "Philips"];
var ironImages = ["iron-haier.jpg", "iron-philips.jpg"];

var ironDetails = ["Color:", "Cord Length(cm):", "Dimensions(cm):", "Weight(kg):", "Voltage(V):", "Power Consumption(W):"];

var ironHaierDetails = ["Green", "180cm", "25.5 x 11.5 x 15.5", "0.7kg", "240V", "1000W"];
var ironPhilipsDetails = ["Royal Blue", "250cm", "Unspecified", "1.79kg", "230V", "2400W"];

var washingNames = ["DWF 200A Washing Machine", "F10C3QDP2 Washing Machine", "HWM150-1678 Washing Machine", "WW90KQX Washing Machine"];
var washingBrands = ["Dawlance", "Haier", "LG", "Samsung"];
var washingImages = ["washing-machine-dawlance.png", "washing-machine-haier.jpg", "washing-machine-lg.jpg", "washing-machine-samsung.jpg"];

var washingDetails = ["Type:", "Color:", "Drum Volume(L):", "Unit Dimensions(H*W*L)mm:", "RPM:", "Options:"];

var washingDawlanceDetails = ["Top Loader", "White", "26L", "Unknown", "1300", "7"];
var washingHaierDetails = ["Top Loader", "Silver", "Unknown", "Unknown", "1300", "9"];
var washingLgDetails = ["Front Loader", "White", "58L", "472 x 286 x 361", "1000", "6"];
var washingSamsungDetails = ["Front Loader", "Inox", "49L", "600 x 850 x 600", "1400", "5"];

var tvNames = ["42' LED B8500 Series", "Ultra HD TV", "65' MU7000 Smart 4K TV", "32' HD Flat TV J4100"];
var tvBrands = ["Haier", "LG", "Samsung", "Samsung"];
var tvImages = ["tv-haier.png", "tv-lg.jpg", "tv-samsung-4k.jpg", "tv-samsung.jpg"];

var tvDetails = ["Size:", "Resolution:", "TV Type:", "Aspect Ratio:", "Refesh Rate:", "Input(USB + HDMI)"];

var tvHaierDetails = ["42'", "1920 x 1080", "DLED", "16:9", "60Hz", "3 + 2"];
var tvLgDetails = ["65'", "3840 x 2160", "IPS NanoCell", "16:9", "120Hz", "4 + 3"];
var tvSamsung4kDetails = ["65'", "3840 x 2160 ", "UHD LED", "18:9", "100Hz", "3 + 2"];
var tvSamsungDetails = ["32'", "1366 x 768", "LED", "16:9", "50Hz", "2 + 2"];

var openCount = 0;

//Function that handles the labels and properties of all fridges based off of their ID on the body tag. Use the gloabal variables above as input and output is inserted into <td> tags made by the function. (styling is done externally after the DOM has fully loaded)

function Fridges() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < fridgeDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = fridgeDetails[i];
		
		if(document.getElementById("fridgeHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = fridgeHaierDetails[i];
		}
		
		if(document.getElementById("fridgeHaierRefrig") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = fridgeHaierRefrigDetails[i];
		}
		
		if(document.getElementById("fridgeLg") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = fridgeLgDetails[i];
		}
		
		if(document.getElementById("fridgeSamsung") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = fridgeSamsungDetails[i];
		}
	}	
}

//Function that triggers itself after pressing on the Compare button. Initiates a table so that user can select appliances from a drop-down menu

function fridgeCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < fridgeNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = fridgeBrands[i] + " " + fridgeNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  fridgeBrands[i] + " " + fridgeNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  fridgeBrands[i] + " " + fridgeNames[i];
	}
	
	for(var i = 1; i < fridgeDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = fridgeDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshFridgeCompare()")
	
	tableDataLabels.appendChild(button);
		
	openCount += 1;
		
	}
	
}

//uses selectedIndex property to input what appliance the user has chosen and then displays its properties for comparison

function refreshFridgeCompare() {
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", fridgeImages[0]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = fridgeHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", fridgeImages[1]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = fridgeHaierRefrigDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", fridgeImages[2]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = fridgeLgDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 4) {
		var image = document.getElementById("image1");
		image.setAttribute("src", fridgeImages[3]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = fridgeSamsungDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", fridgeImages[0]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = fridgeHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", fridgeImages[1]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = fridgeHaierRefrigDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", fridgeImages[2]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = fridgeLgDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 4) {
		var image = document.getElementById("image2");
		image.setAttribute("src", fridgeImages[3]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = fridgeSamsungDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", fridgeImages[0]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = fridgeHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", fridgeImages[1]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = fridgeHaierRefrigDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", fridgeImages[2]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = fridgeLgDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 4) {
		var image = document.getElementById("image3");
		image.setAttribute("src", fridgeImages[3]);
		for(var i = 1; i < fridgeDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = fridgeSamsungDetails[i];
		}
	}
}

function Microwaves() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < microwaveDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = microwaveDetails[i];
		
		if(document.getElementById("microwaveDawlance") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = microwaveDawlanceDetails[i];
		}
		
		if(document.getElementById("microwaveHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = microwaveHaierDetails[i];
		}
		
		if(document.getElementById("microwaveLg") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = microwaveLgDetails[i];
		}
		
		if(document.getElementById("microwaveSamsung") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = microwaveSamsungDetails[i];
		}
	}	
}

function microwaveCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < microwaveNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = microwaveBrands[i] + " " + microwaveNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  microwaveBrands[i] + " " + microwaveNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  microwaveBrands[i] + " " + microwaveNames[i];
	}
	
	for(var i = 1; i < microwaveDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = microwaveDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshMicrowaveCompare()")
	
	tableDataLabels.appendChild(button);
		
		
		openCount += 1;
		
	}
	
}

function refreshMicrowaveCompare() {
	
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", microwaveImages[0]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = microwaveDawlanceDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", microwaveImages[1]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = microwaveHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", microwaveImages[2]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = microwaveLgDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 4) {
		var image = document.getElementById("image1");
		image.setAttribute("src", microwaveImages[3]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = microwaveSamsungDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", microwaveImages[0]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = microwaveDawlanceDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", microwaveImages[1]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = microwaveHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", microwaveImages[2]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = microwaveLgDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 4) {
		var image = document.getElementById("image2");
		image.setAttribute("src", microwaveImages[3]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = microwaveSamsungDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", microwaveImages[0]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = microwaveDawlanceDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", microwaveImages[1]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = microwaveHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", microwaveImages[2]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = microwaveLgDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 4) {
		var image = document.getElementById("image3");
		image.setAttribute("src", microwaveImages[3]);
		for(var i = 1; i < microwaveDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = microwaveSamsungDetails[i];
		}
	}
}

function Dispensers() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < dispenserDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = dispenserDetails[i];
		
		if(document.getElementById("dispenserDawlance") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = dispenserDawlanceDetails[i];;
		}
		
		if(document.getElementById("dispenserHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = dispenserHaierDetails[i];
		}
		
		if(document.getElementById("dispenserLg") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = dispenserLgDetails[i];
		}
	}	
}

function dispenserCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < dispenserNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = dispenserBrands[i] + " " + dispenserNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  dispenserBrands[i] + " " + dispenserNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  dispenserBrands[i] + " " + dispenserNames[i];
	}
	
	for(var i = 1; i < microwaveDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = factoryDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshDispenserCompare()")
	
	tableDataLabels.appendChild(button);
		
	openCount += 1;
		
	}
	
}

function refreshDispenserCompare() {
	
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", dispenserImages[0]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = dispenserDawlanceDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", dispenserImages[1]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = dispenserHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", dispenserImages[2]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = dispenserLgDetails[i];
		}
	}
	
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", dispenserImages[0]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = dispenserDawlanceDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", dispenserImages[1]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = dispenserHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", dispenserImages[2]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = dispenserLgDetails[i];
		}
	}
	
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", dispenserImages[0]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = dispenserDawlanceDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", dispenserImages[1]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = dispenserHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", dispenserImages[2]);
		for(var i = 1; i < dispenserDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = dispenserLgDetails[i];
		}
	}
	
}

function Factories() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < factoryDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = factoryDetails[i];
		
		if(document.getElementById("factoryPhilipsViva") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = factoryPhilpsVivaDetails[i];;
		}
		
		if(document.getElementById("factoryPhilipsDaily") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = factoryPhilipsDailyDetails[i];
		}
		
		if(document.getElementById("factoryDawlance") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = factoryDawlanceDetails[i];
		}
	}	
}

function factoryCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < factoryNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = factoryBrands[i] + " " + factoryNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  factoryBrands[i] + " " + factoryNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  factoryBrands[i] + " " + factoryNames[i];
	}
	
	for(var i = 1; i < factoryDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = factoryDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshFactoryCompare()")
	
	tableDataLabels.appendChild(button);
	
	openCount += 1;	
		
	}
	
}

function refreshFactoryCompare() {
	
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", factoryImages[0]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = factoryPhilpsVivaDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", factoryImages[1]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = factoryPhilipsDailyDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", factoryImages[2]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = factoryDawlanceDetails[i];
		}
	}
	
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", factoryImages[0]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = factoryPhilpsVivaDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", factoryImages[1]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = factoryPhilipsDailyDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", factoryImages[2]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = factoryDawlanceDetails[i];
		}
	}
	
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", factoryImages[0]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = factoryPhilpsVivaDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", factoryImages[1]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = factoryPhilipsDailyDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", factoryImages[2]);
		for(var i = 1; i < factoryDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = factoryDawlanceDetails[i];
		}
	}
	
}

function ACs() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < ACDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = ACDetails[i];
		
		if(document.getElementById("ACDawlance") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = ACDawlanceDetails[i];
		}
		
		if(document.getElementById("ACHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = ACHaierDetails[i];
		}
		
		if(document.getElementById("ACLg") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = ACLgDetails[i];
		}
		
		if(document.getElementById("ACSamsung") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = ACSamsungDetails[i];
		}
	}	
}

function ACCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < fridgeNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = ACBrands[i] + " " + ACNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  ACBrands[i] + " " + ACNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  ACBrands[i] + " " + ACNames[i];
	}
	
	for(var i = 1; i < fridgeDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = ACDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshACCompare()")
	
	tableDataLabels.appendChild(button);
		
	openCount += 1;
		
	}
	
}

function refreshACCompare() {
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", ACImages[0]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = ACDawlanceDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", ACImages[1]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = ACHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", ACImages[2]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = ACLgDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 4) {
		var image = document.getElementById("image1");
		image.setAttribute("src", ACImages[3]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = ACSamsungDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", ACImages[0]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = ACDawlanceDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", ACImages[1]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = ACHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", ACImages[2]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = ACLgDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 4) {
		var image = document.getElementById("image2");
		image.setAttribute("src", ACImages[3]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = ACSamsungDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", ACImages[0]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = ACDawlanceDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", ACImages[1]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = ACHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", ACImages[2]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = ACLgDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 4) {
		var image = document.getElementById("image3");
		image.setAttribute("src", ACImages[3]);
		for(var i = 1; i < ACDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = ACSamsungDetails[i];
		}
	}
}

function Irons() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < ironDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = ironDetails[i];
		
		if(document.getElementById("ironHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = ironHaierDetails[i];
		}
		
		if(document.getElementById("ironPhilips") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = ironPhilipsDetails[i];
		}
		
	}	
}

function ironCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < ironNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = ironBrands[i] + " " + ironNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  ironBrands[i] + " " + ironNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  ironBrands[i] + " " + ironNames[i];
	}
	
	for(var i = 1; i < ironDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = ironDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshIronCompare()")
	
	tableDataLabels.appendChild(button);
		
	openCount += 1;
		
	}
	
}

function refreshIronCompare() {
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", ironImages[0]);
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = ironHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", ironImages[1]);
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = ironPhilipsDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", ironImages[0]);
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = ironHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", ironImages[1]);
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = ironPhilipsDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", ironImages[0]);
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = ironHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", ironImages[1]);
		for(var i = 1; i < ironDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = ironPhilipsDetails[i];
		}
	}
}

function Washing() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < washingDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = washingDetails[i];
		
		if(document.getElementById("washingDawlance") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = washingDawlanceDetails[i];
		}
		
		if(document.getElementById("washingHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = washingHaierDetails[i];
		}
		
		if(document.getElementById("washingLg") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = washingLgDetails[i];
		}
		
		if(document.getElementById("washingSamsung") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = washingSamsungDetails[i];
		}
	}	
}

function washingCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < washingNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = washingBrands[i] + " " + washingNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  washingBrands[i] + " " + washingNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  washingBrands[i] + " " + washingNames[i];
	}
	
	for(var i = 1; i < washingDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = washingDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshWashingCompare()")
	
	tableDataLabels.appendChild(button);
		
		
		openCount += 1;
		
	}
	
}

function refreshWashingCompare() {
	
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", washingImages[0]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = washingDawlanceDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", washingImages[1]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = washingHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", washingImages[2]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = washingLgDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 4) {
		var image = document.getElementById("image1");
		image.setAttribute("src", washingImages[3]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = washingSamsungDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", washingImages[0]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = washingDawlanceDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", washingImages[1]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = washingHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", washingImages[2]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = washingLgDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 4) {
		var image = document.getElementById("image2");
		image.setAttribute("src", washingImages[3]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = washingSamsungDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", washingImages[0]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = washingDawlanceDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", washingImages[1]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = washingHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", washingImages[2]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = washingLgDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 4) {
		var image = document.getElementById("image3");
		image.setAttribute("src", washingImages[3]);
		for(var i = 1; i < washingDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = washingSamsungDetails[i];
		}
	}
}

function TVs() {
	
	var table = document.getElementById("table");
	
	for(var i = 0; i < tvDetails.length; i++) {
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = tvDetails[i];
		
		if(document.getElementById("tvHaier") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = tvHaierDetails[i];
		}
		
		if(document.getElementById("tvLg") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = tvLgDetails[i];
		}
		
		if(document.getElementById("tvSamsung4k") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = tvSamsung4kDetails[i];
		}
		
		if(document.getElementById("tvSamsung") !== null) {
			var tableDataDetails = document.createElement("td");
			tableRow.appendChild(tableDataDetails);
			tableDataDetails.innerHTML = tvSamsungDetails[i];
		}
	}	
}

function tvCompare() {
	
	document.getElementById("compare").style.display = "table-cell";
	
	if(openCount == 0) {
	
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");
	
	var option = document.createElement("option");
	select1.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select2.appendChild(option).innerHTML = "";
	
	var option = document.createElement("option");
	select3.appendChild(option).innerHTML = "";
	
	for(var i = 0; i < tvNames.length; i++) {
		var option = document.createElement("option");
		select1.appendChild(option).innerHTML = tvBrands[i] + " " + tvNames[i];
		var option = document.createElement("option");
		select2.appendChild(option).innerHTML =  tvBrands[i] + " " + tvNames[i];
		var option = document.createElement("option");
		select3.appendChild(option).innerHTML =  tvBrands[i] + " " + tvNames[i];
	}
	
	for(var i = 1; i < tvDetails.length; i++) {
		
		var table = document.getElementById("compareTable");
		
		var tableRow = document.createElement("tr");
		table.appendChild(tableRow);
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		tableDataLabels.innerHTML = tvDetails[i];
		
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
		var tableDataLabels = document.createElement("td");
		tableRow.appendChild(tableDataLabels);
	}
	
	var tableRow = document.createElement("tr");
	table.appendChild(tableRow);
	var tableDataLabels = document.createElement("td");
	tableRow.appendChild(tableDataLabels).colSpan = "4";
	
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "Compare");
	button.setAttribute("onClick", "refreshTvCompare()")
	
	tableDataLabels.appendChild(button);
		
	openCount += 1;
		
	}
	
}

function refreshTvCompare() {
	if(document.getElementById("select1").selectedIndex == 0) {
		var image = document.getElementById("image1");
		image.setAttribute("src", "");
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = "";
		}
	}
	if(document.getElementById("select1").selectedIndex == 1) {
		var image = document.getElementById("image1");
		image.setAttribute("src", tvImages[0]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = tvHaierDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 2) {
		var image = document.getElementById("image1");
		image.setAttribute("src", tvImages[1]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = tvLgDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 3) {
		var image = document.getElementById("image1");
		image.setAttribute("src", tvImages[2]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = tvSamsung4kDetails[i];
		}
	}
	if(document.getElementById("select1").selectedIndex == 4) {
		var image = document.getElementById("image1");
		image.setAttribute("src", tvImages[3]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[1].innerHTML = tvSamsungDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 0) {
		var image = document.getElementById("image2");
		image.setAttribute("src", "");
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = "";
		}
	}
	if(document.getElementById("select2").selectedIndex == 1) {
		var image = document.getElementById("image2");
		image.setAttribute("src", tvImages[0]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = tvHaierDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 2) {
		var image = document.getElementById("image2");
		image.setAttribute("src", tvImages[1]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = tvLgDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 3) {
		var image = document.getElementById("image2");
		image.setAttribute("src", tvImages[2]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = tvSamsung4kDetails[i];
		}
	}
	if(document.getElementById("select2").selectedIndex == 4) {
		var image = document.getElementById("image2");
		image.setAttribute("src", tvImages[3]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[2].innerHTML = tvSamsungDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 0) {
		var image = document.getElementById("image3");
		image.setAttribute("src", "");
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = "";
		}
	}
	if(document.getElementById("select3").selectedIndex == 1) {
		var image = document.getElementById("image3");
		image.setAttribute("src", tvImages[0]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = tvHaierDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 2) {
		var image = document.getElementById("image3");
		image.setAttribute("src", tvImages[1]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = tvLgDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 3) {
		var image = document.getElementById("image3");
		image.setAttribute("src", tvImages[2]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = tvSamsungDetails[i];
		}
	}
	if(document.getElementById("select3").selectedIndex == 4) {
		var image = document.getElementById("image3");
		image.setAttribute("src", tvImages[3]);
		for(var i = 1; i < tvDetails.length; i++) {
			document.getElementById("compareTable").children[i].children[3].innerHTML = tvSamsungDetails[i];
		}
	}
}


function compareClose() {
	document.getElementById("compare").style.display = "none";
}

if(document.getElementById("fridgeHaier") !== null || document.getElementById("fridgeHaierRefrig") !== null || document.getElementById("fridgeLg") !== null || document.getElementById("fridgeSamsung") !== null) {
	Fridges();
}

if(document.getElementById("microwaveDawlance") !== null || document.getElementById("microwaveHaier") !== null || document.getElementById("microwaveLg") !== null || document.getElementById("microwaveSamsung") !== null) {
	Microwaves();
}

if(document.getElementById("dispenserDawlance") !== null || document.getElementById("dispenserHaier") !== null || document.getElementById("dispenserLg") !== null) {
	Dispensers();
}

if(document.getElementById("factoryPhilipsViva") !== null || document.getElementById("factoryPhilipsDaily") !== null || document.getElementById("factoryDawlance") !== null) {
	Factories();
}

if(document.getElementById("ACDawlance") !== null || document.getElementById("ACHaier") !== null || document.getElementById("ACLg") !== null || document.getElementById("ACSamsung") !== null) {
	ACs();
}

if(document.getElementById("ironHaier") !== null || document.getElementById("ironPhilips") !== null ) {
	Irons();
}

if(document.getElementById("washingDawlance") !== null || document.getElementById("washingHaier") !== null || document.getElementById("washingLg") !== null || document.getElementById("washingSamsung") !== null) {
	Washing();
}

if(document.getElementById("tvHaier") !== null || document.getElementById("tvLg") !== null || document.getElementById("tvSamsung4k") !== null || document.getElementById("tvSamsung") !== null) {
	TVs();
}



