var test = require('tape');
var control = require('../../control/index');

var plateauMock = {
    'isValidSpot' : function(){
        return true;
    }
}
var rover = control.createRover(plateauMock);

test('Rover landing', function(t){
    t.plan(3);
    var position = {
        x: 1,
        y: 2
    };
    
    rover.landing(position, 'N');
    t.equal(rover.position.x, 1, 'The result should be as expected.');
    t.equal(rover.position.y, 2, 'The result should be as expected.');
    t.equal(rover.front, 'N', 'The result should be as expected.');


});


test('Rover navigate', function(t){
    t.plan(12);
    var position = {
        x: 3,
        y: 3
    };
    rover.landing(position, 'W');
    rover.navigate('M');

    t.equal(rover.position.x, 2, 'The result should be as expected.');
    t.equal(rover.position.y, 3, 'The result should be as expected.');
    t.equal(rover.front, 'W', 'The result should be as expected.');

    rover.landing(position, 'W');
    rover.navigate('R');

    t.equal(rover.position.x, 3, 'The result should be as expected.');
    t.equal(rover.position.y, 3, 'The result should be as expected.');
    t.equal(rover.front, 'N', 'The result should be as expected.');

    rover.landing(position, 'W');
    rover.navigate('LM');

    t.equal(rover.position.x, 3, 'The result should be as expected.');
    t.equal(rover.position.y, 2, 'The result should be as expected.');
    t.equal(rover.front, 'S', 'The result should be as expected.');

    rover.navigate('MLMMLMMLMRM');
    t.equal(rover.position.x, 4, 'The result should be as expected.');
    t.equal(rover.position.y, 4, 'The result should be as expected.');
    t.equal(rover.front, 'N', 'The result should be as expected.');

});

test('Rover get location', function(t){
    t.plan(3);
    var position = {
        x: 3,
        y: 3
    };
    rover.landing(position, 'W');
    rover.getCurrentlocation();

    t.equal(rover.position.x, 3, 'The result should be as expected.');
    t.equal(rover.position.y, 3, 'The result should be as expected.');
    t.equal(rover.front, 'W', 'The result should be as expected.');


});
