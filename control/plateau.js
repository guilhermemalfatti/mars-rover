function Plateau(x, y){
    this.x = y;
    this.y = y;

    this.isValidSpot = function(pos){
        return (
            pos.x > -1 && pos.y > -1 &&
            pos.x <= this.x && pos.y <= this.y);
    }

}

exports.Plateau = function(x, y) {
    return new Plateau(x, y);
};