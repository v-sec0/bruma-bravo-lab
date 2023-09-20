$(document).ready(function () {
    console.log("Ready to go!");
  
    let theGuard = $("#theGuard")
    let thePriest = $("#thePriest")
    let theMerchant = $("#theMerchant")

    theMerchant.click(function() {
        $("#intro").hide();
        $("#prompt").hide();
        theGuard.hide();
        thePriest.hide();
        $("#theMerchantEnding").fadeIn();
        $("#btnReload").fadeIn();

    });

    theGuard.click(function() {
        $("#intro").hide();
        $("#prompt").hide();
        theMerchant.hide();
        thePriest.hide();
        $("#theGuardEnding").fadeIn();
        $("#btnReload").fadeIn();
    });

    thePriest.click(function() {
        $("#intro").hide();
        $("#prompt").hide();
        theMerchant.hide();
        theGuard.hide();
        $("#thePriestEnding").fadeIn();
        $("#btnReload").fadeIn();
    });


    $("#btnReload").on("click", function() {
        location.reload();
    });



});