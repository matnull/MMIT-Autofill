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

    var partsArray = partsNeeded.split(',');
    var partsArrayLength = partsArray.length;

    if (partsArrayLength > 1) {
        var lastPart = partsArray.pop();
        partsNeeded = partsArray.join(', ') + ', and ' + lastPart;
    }

    if (partsArrayLength === 1) {
        problemStatement += partsNeeded + ". Ordering part to secure integrity of the unit.";
        $("#outText").val(problemStatement);
    }
    else if (partsArrayLength > 1){
        problemStatement += partsNeeded + ". Ordering parts to secure integrity of the unit.";
        $("#outText").val(problemStatement);
    }
}
    



function displayRadioValue() {
    var ele = document.getElementsByName('warrantyType');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML
                = "Warranty Type: " + ele[i].value;
    }
}

function handleWarrantyButtonClick() {
    $('.warranty-button').removeClass('selected');
    $(this).addClass('selected');
    $(this).find('input').prop('checked', true);
    displayRadioValue();
}

$(document).ready(function() {
    $('.chkbx').change(function() {
        updateSelectedText();
    });

    $('.warranty-button').click(handleWarrantyButtonClick);
});


function copyToClipboard() {
    var text = $("#outText").val();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    $("#confirmationText").text("Problem statement copied to clipboard").fadeIn().delay(3000).fadeOut();
}

$(document).ready(function() {
    $('.chkbx').change(function() {
        updateSelectedText();
    });

    $('.warranty-button').click(handleWarrantyButtonClick);

    // Add event listener for the "Copy Problem Statement" button
    $('#copyButton').click(copyToClipboard);
});

