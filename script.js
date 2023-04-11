function updateSelectedText() {
    var text = "";
    $('.chkbx').each(function() {
        if ($(this).is(':checked')) {
            text += $(this).val() + ',';
        }
    });
    text = text.slice(0, -1);
    $("#selectedText").val(text);
}

function generateProblemStatement() {
    var warrantyType = $("input[name='warrantyType']:checked").val();
    var partsNeeded = $("#selectedText").val();
    var problemStatement = "Unit was ";
    if (warrantyType === "ADP") {
        problemStatement += "accidentally dropped during use, resulting in issues with ";
    } else if (warrantyType === "Customer Limited Warranty") {
        problemStatement += "experiencing hardware malfunctions with ";
    }
    problemStatement += partsNeeded + ". Ordering part(s) to secure integrity of the unit.";
    $("#outText").val(problemStatement);
}

function generateScriptOutput() {
    var problemStatement = $("#outText").val();
    // Here you can send the problemStatement to ChatGPT for further processing
    // and display the output in the textarea with id "scriptOutput"
    var scriptOutput = "Output from ChatGPT: " + problemStatement; // Replace this with actual output from ChatGPT
    $("#scriptOutput").val(scriptOutput);
}

function displayRadioValue() {
    var ele = document.getElementsByName('warrantyType');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML
                = "Warranty Type: " + ele[i].value;
    }
}

$(document).ready(function() {
    $('.chkbx').change(function() {
        updateSelectedText();
    });
});
