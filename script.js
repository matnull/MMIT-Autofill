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

// Click event for warranty buttons
//TODO ADD lock if customer limited warranty is added
function handleWarrantyButtonClick() {
    $('.warranty-button').removeClass('selected');
    $(this).addClass('selected');
    $(this).find('input').prop('checked', true);

    let selectedWarranty = $(this).data("value");
    let warrantyOutput = "";

    if (selectedWarranty === "ADP") {
      warrantyOutput = 
      "Warranty Type: ADP<br><br>**Warranty for phyiscal damage.**";
    } else if (selectedWarranty === "Customer Limited Warranty") {
      warrantyOutput = 
      "Warranty Type: Customer Limited Warranty<br><br>**Make sure to check it dosen't have any physical damage**";
    }

    $("#result").html(warrantyOutput); // Use .html() instead of .text() to render HTML tags
}


function copyToClipboard() {
    var text = $("#outText").val();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    
    // Change the button color to green and wait for 2 seconds before changing it back to blue
    $("#copyButton").css("background-color", "green");
    setTimeout(function() {
        $("#copyButton").css("background-color", "");
    }, 2000);
}



function clearAll() {
    $('.chkbx').each(function() {
        $(this).prop('checked', false);
    });
    $("#selectedText").val("");
    $("#outText").val("");
    $("#result").html("");
    $('.warranty-button').removeClass('selected');
}



$(document).ready(function() {
    $('.chkbx').change(function() {
        updateSelectedText();
    });

    $('.warranty-button').click(handleWarrantyButtonClick);

    // Add event listener for the "Copy Problem Statement" button
    $('#copyButton').click(copyToClipboard);
});
