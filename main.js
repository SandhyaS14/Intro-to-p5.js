function setup() {
    canvas = createCanvas(600, 480);
    canvas.position(375, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 160, 90, 300, 300);
    tint(tint_color);

    stroke(0, 255, 100);
    fill(255, 255, 255, 0);
    rect(40, 40, 520, 400);

    fill(0, 240, 230);
    stroke(0, 240, 230);
    circle(40, 40, 65);

    fill(0, 240, 230);
    stroke(0, 240, 230);
    circle(40, 440, 65);

    fill(0, 240, 230);
    stroke(0, 240, 230);
    circle(560, 440, 65);
    
    fill(0, 240, 230);
    stroke(0, 240, 230);
    circle(560, 50, 65);

}

function apply() {
    tint_color = document.getElementById("filtercolor").value;
}

function snap() {
    save("filter_picture.jpg")
}