function setup() {
    canvas = createCanvas(600, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 600, 480);
    tint(tint_color);
}

function apply() {
    tint_color = document.getElementById("filtercolor").value;
}

function snap() {
    save("filter_picture.jpg")
}