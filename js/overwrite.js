var HelloYou = (function(){
    console.log("Hello there, thanks for visiting my page. The style and layout is always changing. If you have any questions please send me an email.")
})();


var large_img_obj = {
    "amdimne": {"id" : "maxnot_site_admin01","smimg": "maxnot_site_admin01-450.jpg", "lrgimg":"maxnot_site_admin01.jpg"},
    "cobralabs": {"id":"maxnot_site_cobralabs", "smimg": "maxnot_site_cobra01-450.jpg", "lrgimg":"maxnot_site_cobra_full.jpg"},
    "mindleaders": {"id":"maxnot_mindleader_inter", "smimg": "maxnotmin_mindleaders_interface_450.jpg", "lrgimg":"maxnotmin_mindleaders_interface.jpg"},
    "barterisland": {"id":"maxnot_barterisland", "smimg": "maxnot_barter_450.png", "lrgimg":"maxnot_barter_1080.png"},
    "citrasolv": {"id":"maxnot_citrasolv", "smimg": "maxnot_citra_solv_mobile_conversion_450.jpg", "lrgimg":"maxnot_citra_solv_mobile_conversion.jpg"},
    "obdmcity": {"id":"maxnot_obdm_city", "smimg": "maxnot_obdm_city-450s.jpg", "lrgimg":"maxnot_obdm_city-1080.jpg"},
    "obdmdesert": {"id":"maxnot_obdm_des", "smimg": "maxnot_obdm_desert-450s.jpg", "lrgimg":"maxnot_obdm_desert-1080.jpg"},
    "django": {"id":"django", "smimg": "max_thumb_state_django_400.jpg", "lrgimg":"max_thumb_state_django.jpg"}



};

function makeLargeImg(the_id) {
    var the_caption = the_id.alt;
    var img_id = the_id.id;
    var full_img_path = "images" + "/" + large_img_obj[img_id].lrgimg;
    //console.log("FULL IMG PATH: ", full_img_path);
    //GET THE MODAL FRAME
    var modal = document.getElementById('theModal');
    var img = document.getElementById(img_id);
    var modalImg = document.getElementById("big_img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = full_img_path;
    captionText.innerHTML = the_caption;
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
};
