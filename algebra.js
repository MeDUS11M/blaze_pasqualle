class Vector2 {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    };

    len() {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    };

    getCoeff(vec) {
        return (this.y - vec.y) / (this.x - vec.x)
    };

    getMiddle(vec) {
        return new Vector2 (((this.x + vec.x) / 2), ((this.y + vec.y) / 2))
    };

    getDistance(vec) {
        return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2))
    };

    draw(ctx, canvas, color) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + this.x * ratio, canvas.height / 2 - this.y * ratio, 3, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.fill();
    }
};

class Circumference {
    constructor (center, radius) {
        this.center = center;
        this.radius = radius;
    };

    draw (ctx, canvas, color) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + this.center.x * ratio, 
                canvas.height / 2 - this.center.y * ratio,
                this.radius * ratio,
                0, 
                2 * Math.PI, 
                false);
        ctx.strokeStyle = color;
        ctx.stroke();
    };
}