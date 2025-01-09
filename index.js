$(function () {
    const heart = $("#heart");

    // Pause or Play Animation
    $("#pause").on("click", function () {
        if (heart.css("animation-play-state") === "running") {
            heart.css("animation-play-state", "paused");
            $(this).text("PLAY");
        } else {
            heart.css("animation-play-state", "running");
            $(this).text("PAUSE");
        }
    });

    // Change Background and Text Colors
    $("#change").on("click", function () {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);

        // Ensure text color is a contrasting value
        let textR = Math.max(0, randomR - 128);
        let textG = Math.max(0, randomG - 128);
        let textB = Math.max(0, randomB - 128);

        $("body").css("background", `rgb(${randomR}, ${randomG}, ${randomB})`);
        $("body").css("color", `rgb(${textR}, ${textG}, ${textB})`);
    });

    // Increase Font Size Dynamically on Each Click
    heart.on("click", function () {
        let currentSize = parseInt($(this).css("font-size")); // Mevcut yazı boyutunu al
        let newSize = currentSize + 20; // Her tıklamada 2px artır
        if(currentSize < 300){
            $("body").css("font-size", `${newSize}px`); // Yeni boyutu uygula   
        }
    });
});
