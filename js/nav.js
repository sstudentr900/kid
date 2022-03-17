//nav
window.onload=function() {
    var butright = document.getElementById("butright");
    var butcloss = document.getElementById("butcloss");

    butcloss.addEventListener("click",function(){
        Experienceactive();
    });
    butright.addEventListener("click",function(){
        Experienceactive();
    });
}
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function Experienceactive() {
    var Experience = document.querySelector(".Experience");
    if(hasClass(Experience, 'active')){
        Experience.className ="Experience";
    }else{
        Experience.className ="Experience active";
    }
}

$('#idFormExperience').validationEngine({
    promptPosition: 'bottomLeft', scroll: false
});


