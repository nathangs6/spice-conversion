// Table construction
var spiceOptions = {
    peppercorn: { value: "peppercorn", text: "Peppercorn", groundToWhole: "1" },
    allspice: { value: "allspice", text: "Allspice", groundToWhole: "4/3" },
    juniper: { value: "juniper", text: "Juniper", groundToWhole: "4/3" },
    cumin: { value: "cumin", text: "Cumin", groundToWhole: "4/3" },
    caraway: { value: "caraway", text: "Caraway", groundToWhole: "4/3" },
    fennel: { value: "fennel", text: "Fennel", groundToWhole: "4/3" },
    mustard: { value: "mustard", text: "Mustard", groundToWhole: "1" },
    anise_seed: { value: "anise_seed", text: "Anise Seed", groundToWhole: "1" },
    dill_seed: { value: "dill_seed", text: "Dill Seed", groundToWhole: "1" },
    celery_seed: { value: "celery_seed", text: "Celery Seed", groundToWhole: "1" },
    cardamom: { value: "cardamom", text: "Cardamom", groundToWhole: "6", wholeMeasure: "pods" },
    cloves: { value: "cloves", text: "Clove", groundToWhole: "4/3" },
    coriander: { value: "coriander", text: "Coriander", groundToWhole: "2" },
    cinnamon: { value: "cinnamon", text: "Cinnamon", groundToWhole: "3", wholeMeasure: "inch stick" }
}

var measurementOptions = [
    { value: "g", text: "g" },
    { value: "kg", text: "kg" },
    { value: "tsp", text: "tsp" },
    { value: "tbsp", text: "tbsp" }
]

////////////////////////////
/// CONVERSION FUNCTIONS ///
////////////////////////////
function convertGramsToKilograms(value) {
    return value / 1000;
}

function convertKilogramsToGrams(value) {
    return value * 1000;
}

function convertTspToTbsp(value) {
    return 0;
}

function addRow() {
    var table = document.getElementById("spice-table").getElementsByTagName('tbody')[0]
    var newRowNum = table.getElementsByTagName("tr").length + 1


    var newRow = table.insertRow();

    // Make spice cell
    var newCell = newRow.insertCell(0);
    var select = document.createElement("select")
    var option = document.createElement("option");
    option.value = "disabled";
    option.text = "Spice";
    option.disabled = true;
    option.selected = true;
    select.add(option);
    for (var i in spiceOptions) {
        var option = document.createElement("option");
        option.value = spiceOptions[i].value;
        option.text = spiceOptions[i].text;
        select.add(option);
    }
    select.name = "spice-" + newRowNum;
    select.id = "spice-" + newRowNum;
    newCell.appendChild(select)

    // Make measurement cell
    var newCell = newRow.insertCell(1);
    var select = document.createElement("select")
    var option = document.createElement("option");
    option.value = "disabled";
    option.text = "Meas.";
    option.disabled = true;
    option.selected = true;
    select.add(option);
    for (var i = 0; i < measurementOptions.length; i++) {
        var option = document.createElement("option");
        option.value = measurementOptions[i].value;
        option.text = measurementOptions[i].text;
        select.add(option);
    }
    select.name = "measurement-" + newRowNum;
    select.id = "measurement-" + newRowNum;
    select.setAttribute("onchange", "selectMeasurement(event)");
    newCell.appendChild(select)

    // Make quantity cell
    var newCell = newRow.insertCell(2);
    var quantityDiv = document.createElement("div");
    quantityDiv.id = "quantity-" + newRowNum;
    newCell.appendChild(quantityDiv);

    // Make output cell
    var newCell = newRow.insertCell(3);
    var newOutput = document.createElement("span");
    newOutput.id = "output-" + newRowNum + "-quantity";
    newCell.appendChild(newOutput);
    var spacer = document.createElement("span");
    spacer.innerHTML = " ";
    newCell.appendChild(spacer);
    var newOutput = document.createElement("span");
    newOutput.id = "output-" + newRowNum + "-measure";
    newCell.appendChild(newOutput);

    // Make notes cell
    var newCell = newRow.insertCell(4);
    var notes = document.createElement("input");
    notes.type = "text";
    newCell.appendChild(notes);
}

// Measurement options
const fractions = [
    { value: "0", text: "0" },
    { value: "1/16", text: "1/16" },
    { value: "1/8", text: "1/8" },
    { value: "3/16", text: "3/16" },
    { value: "1/4", text: "1/4" },
    { value: "5/16", text: "5/16" },
    { value: "3/8", text: "3/8" },
    { value: "7/16", text: "7/16" },
    { value: "1/2", text: "1/2" },
    { value: "9/16", text: "9/16" },
    { value: "5/8", text: "5/8" },
    { value: "11/16", text: "11/16" },
    { value: "3/4", text: "3/4" },
    { value: "13/16", text: "13/16" },
    { value: "7/8", text: "7/8" },
    { value: "15/16", text: "15/16" }
];

function makeFractionalMeasurements() {
    var fractionSelect = document.createElement("select");
    var option = document.createElement("option");
    option.value = "disabled";
    option.text = "Fr.";
    option.disabled = true;
    option.selected = true;
    fractionSelect.add(option);
    for (i = 0; i < fractions.length; i++) {
        var option = document.createElement("option");
        option.value = fractions[i].value;
        option.text = fractions[i].text;
        fractionSelect.add(option);
    }
    return fractionSelect;
}

function selectMeasurement(e) {
    var measurement = e.target.value;
    // TODO: make the below work for row numbers greater than 9
    var quantityDiv = document.getElementById("quantity-" + e.target.name[e.target.name.length-1])

    if (measurement == "g" || measurement == "kg") {
        var newInput = document.createElement("input");
        newInput.name = quantityDiv.id + "-num";
        newInput.id = newInput.name;
        newInput.type = "number";
        quantityDiv.innerHTML = '';
        quantityDiv.appendChild(newInput);
    } else if (measurement == "tsp" || measurement == "tbsp") {
        quantityDiv.innerHTML = '';
        var newSelect = document.createElement("select");
        for (i = 0; i < 10; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = i;
            newSelect.add(option);
        }
        newSelect.id = quantityDiv.id + "-whole";
        newSelect.name = quantityDiv.id;
        quantityDiv.appendChild(newSelect);

        var newSelect = makeFractionalMeasurements();
        newSelect.id = quantityDiv.id + "-fraction";
        newSelect.name = newSelect.id;
        quantityDiv.appendChild(newSelect);
    }
}

conversions = [

]

function convertWholeToGround() {
    var table = document.getElementById("spice-table").getElementsByTagName('tbody')[0]
    var rows = table.getElementsByTagName("tr")
    for (i = 1; i < rows.length+1; i++) {
        spice = document.getElementById("spice-"+i).value;
        meas = document.getElementById("measurement-"+i).value;
        outputQuantity = document.getElementById("output-"+i+"-quantity");
        outputMeasure = document.getElementById("output-"+i+"-measure");
        if (meas == "g" || meas == "kg") {
            quantity = document.getElementById("quantity-"+i+"-num").value;
            output.innerHTML = quantity + " " + meas;
        } else {
            whole = document.getElementById("quantity-"+i+"-whole").value;
            fraction = document.getElementById("quantity-"+i+"-fraction").value;
            quantity = math.add(math.fraction(whole), math.fraction(fraction));
            wholeQuantity = math.multiply(quantity, math.fraction(spiceOptions[spice].groundToWhole));
            outputQuantity.innerHTML = wholeQuantity.toFraction(excludeWhole=true);
            if ("wholeMeasure" in spiceOptions[spice]) {
                outputMeasure.innerHTML = spiceOptions[spice].wholeMeasure;
            } else {
                outputMeasure.innerHTML = meas;
            }
        }
    }
}