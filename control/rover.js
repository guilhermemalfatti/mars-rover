var config = require('../config/index');

function Rover(plateau){
    this.position;
    this.front;
    this.plateau = plateau

    this.landing = function(position, front){
        if(plateau.isValidSpot(position)){
            this.position = position;
            this.front = front;
        }else{
            console.log('Invalid landing position.');
        }        
    };

    this.navigate = function(commands){
        var self = this;
        commands.split('').map(function(cmd){
            self.execCommand(cmd);
        });
    };

    this.execCommand = function(cmd){        
        switch(cmd) {
            case 'L':
                this.front = config.spinMap[this.front].L;
                break;
            case 'R':
                this.front = config.spinMap[this.front].R;
                break;
            case 'M':
                this.moveForward();
                break;
            default:
                console.log('unknown command.');
        }
    };

    this.moveForward = function(){
        var tempPos = {
            x: this.position.x,
            y: this.position.y    
        };
        var coordinate = config.moveMap[this.front][0];
        tempPos[coordinate] += config.moveMap[this.front][1];

        if(plateau.isValidSpot(tempPos)){
            this.position = tempPos;
        }else{
            console.log('invalid movement, you reached the edge.');
        }        
        
    }

    this.getCurrentlocation = function(){
        return {
            x: this.position.x, 
            y: this.position.y,
            front: this.front
        }
    }  
    
}

exports.Rover = function(plateau) {
    return new Rover(plateau);
};