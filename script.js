let section=document.querySelector("section")

function toLight(){
  section.classList.add("light")
      section.classList.remove("dark")
}

    function toDark(){
        section.classList.add("dark")
            section.classList.remove("light")
}


$(document).ready(function() {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $('body').addClass('dark-preview');
        $('body').removeClass('white-preview');
    }
    else if($(ele).prop("checked") == false){
        $('body').addClass('white-preview');
        $('body').removeClass('dark-preview');
    }
}

