// Initialize Canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const WIDTH = 900;
const HEIGHT = 600;
canvas.width = WIDTH;
canvas.height = HEIGHT;

// Colors
const BACKGROUND_COLOR = "rgb(221, 193, 167)";
const BUTTON_COLOR = "rgb(145, 47, 31)";
const BUTTON_HOVER_COLOR = "rgb(175, 77, 61)";
const TEXT_COLOR = "rgb(255, 255, 255)";
const BORDER_COLOR = "rgb(91, 79, 71)";

// Load images
const images = {
    mainImage: loadImage("trail_scene.png"),
    chooseMembersImage: loadImage("faces_image.png"),
    buySuppliesImage: loadImage("general_store_image.png"),
    changePaceImage: loadImage("town_image.png"),
    changeRationsImage: loadImage("mealtime_image.png"),
    soundPageImage: loadImage("music_image.png")
};

function loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
}

// Background music
const backgroundMusic = new Audio("Philip%20Ravenel%20-%20Joyful%20Countryside.mp3");
backgroundMusic.volume = 0.7;
backgroundMusic.loop = true;
backgroundMusic.play();

// Button
class Button {
    constructor(x, y, width, height, text, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.image = image;
        this.isHovered = false;
    }

    draw() {
        ctx.fillStyle = this.isHovered ? BUTTON_HOVER_COLOR : BUTTON_COLOR;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if (this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        ctx.strokeStyle = BORDER_COLOR;
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = TEXT_COLOR;
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2 + 8);
    }

    checkHover(mouseX, mouseY) {
        this.isHovered = mouseX >= this.x && mouseX <= this.x + this.width &&
                         mouseY >= this.y && mouseY <= this.y + this.height;
    }
}

const buttons = [
    new Button(100, 100, 400, 240, "Start Game", images.mainImage),
    new Button(100, 360, 400, 240, "Change Pace", images.changePaceImage),
    new Button(500, 100, 400, 240, "Buy Supplies", images.buySuppliesImage),
    new Button(500, 360, 400, 240, "Sound Options", images.soundPageImage)
];

// Main game loop
function gameLoop() {
    // Clear screen
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Draw buttons
    buttons.forEach(button => button.draw());

    requestAnimationFrame(gameLoop);
}

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    buttons.forEach(button => button.checkHover(mouseX, mouseY));
});

// Start game loop
gameLoop();
