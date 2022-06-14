let mostPopularPhotos=[ 

];

$(".buttons").click(function() {
    let input = $(".answer").val();
    mostPopularPhotos.push(input);
    $(".posts").append("<img src=" + mostPopularPhotos[mostPopularPhotos.length-1] + ">");
    console.log(mostPopularPhotos);
    $(".message").text(mostPopularPhotos.length + " pictures " + "were " + "posted");
    
    if (mostPopularPhotos.length > 8) {
        $(".membershipinput").text("Obsidian User");
        $(".membershipinput").css( "color", "#9449C8");
    } else if (mostPopularPhotos.length > 6) {
        $(".membershipinput").text("Diamond User");
        $(".membershipinput").css( "color", "#3098e6");
    } else if (mostPopularPhotos.length > 4) {
        $(".membershipinput").text("Gold User");
         $(".membershipinput").css("color", "#FFD700");
    } else if (mostPopularPhotos.length > 2) {
        $(".membershipinput").text("Silver User");
        $(".membershipinput").css("color", "#C0C0C0");
    } else if (mostPopularPhotos.length > 0) {
        $(".membershipinput").text("Bronze User");
        $(".membershipinput").css("color", "#ad8443");
    } 
   
       
});