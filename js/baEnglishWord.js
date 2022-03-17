function addEnglishWord(){
   $('#overmask,#messageBox').show();
}
function closeBox(){
    $('#overmask,#messageBox,#deleteBox').hide();
}
function modifyEnglishWord(){
    $('#overmask,#messageBox').show();
}
function deleteEnglishWord(){
    $('#overmask,#deleteBox').show();
}
$('#baEnglishWord').validationEngine({
    promptPosition: 'bottomLeft', scroll: false
});
