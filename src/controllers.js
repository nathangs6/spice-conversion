import { spiceOptions, measurementOptions, fractionOptions, Fraction } from "../src/data.js";
import { reduceFraction, addFractionAndInteger, makeMixedFraction, convertGroundToWhole } from "./services.js";

export function fractionToString(fraction) {
    if (fraction.getNum() == 0) {
        return "";
    }
    return fraction.getNum() + "/" + fraction.getDen();
}

export function fractionToMixedFractionString(fraction) {
    var fraction = reduceFraction(fraction);
    var whole;
    var parts;
    [whole, parts] = makeMixedFraction(fraction);
    return whole.toString() + " " + fractionToString(parts);
}

export function stringToFraction(s) {
    var parts = s.split("/");
    return new Fraction(parseInt(parts[0], 10), parseInt(parts[1], 10))
}

export function addRow() {
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
    var spiceNames = Object.keys(spiceOptions);
    spiceNames.sort();
    for (var i = 0; i < spiceNames.length; i++) {
        var option = document.createElement("option");
        option.value = spiceOptions[spiceNames[i]].value;
        option.text = spiceOptions[spiceNames[i]].text;
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

    // Make button cell
    var newCell = newRow.insertCell(4);
    var button = document.createElement("button");
    button.onclick = () => { convertGroundToWholeRow(newRowNum) };
    button.innerHTML = "Convert";
    button.className = "button";
    newCell.appendChild(button);

    // Make notes cell
    var newCell = newRow.insertCell(5);
    var notes = document.createElement("input");
    notes.type = "text";
    newCell.appendChild(notes);
}
window.addRow = addRow;

export function makeFractionalMeasurements() {
    var fractionSelect = document.createElement("select");
    var option = document.createElement("option");
    option.value = "disabled";
    option.text = "Fr.";
    option.disabled = true;
    option.selected = true;
    fractionSelect.add(option);
    for (var i = 0; i < fractionOptions.length; i++) {
        var option = document.createElement("option");
        option.value = fractionOptions[i].value;
        option.text = fractionOptions[i].text;
        fractionSelect.add(option);
    }
    return fractionSelect;
}
window.makeFractionalMeasurements = makeFractionalMeasurements;

export function selectMeasurement(e) {
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
        for (var i = 0; i < 10; i++) {
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
window.selectMeasurement = selectMeasurement;

export function convertGroundToWholeRow(i) {
    var spice = document.getElementById("spice-"+i).value;
    var meas = document.getElementById("measurement-"+i).value;
    var outputQuantity = document.getElementById("output-"+i+"-quantity");
    var outputMeasure = document.getElementById("output-"+i+"-measure");
    if (meas == "g" || meas == "kg") {
        var quantity = document.getElementById("quantity-"+i+"-num").value;
        var quantity_str = quantity;
    } else {
        var whole = parseInt(document.getElementById("quantity-"+i+"-whole").value, 10);
        var frac = stringToFraction(document.getElementById("quantity-"+i+"-fraction").value)
        var quantity = addFractionAndInteger(frac, whole);
        var quantity_str = fractionToMixedFractionString(convertGroundToWhole(spice, quantity, meas));
    }
    outputQuantity.innerHTML = quantity_str;
}
window.convertGroundToWholeRow = convertGroundToWholeRow;

export function convertGroundToWholeAll() {
    var table = document.getElementById("spice-table").getElementsByTagName('tbody')[0]
    var rows = table.getElementsByTagName("tr")
    for (var i = 1; i < rows.length+1; i++) {
        convertGroundToWholeRow(i);
    }
}
window.convertGroundToWholeAll = convertGroundToWholeAll;