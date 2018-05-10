var test = require('tape');
var control = require('../../control/index');

test('Plateau Validation', function(t){
    t.plan(3);
    var position = {
        x: 1,
        y: 1
    };
    var plateau = control.createPlateau(2,2);
    t.equal(plateau.isValidSpot(position), true, 'The result should be as expected.');
    position.x = 2;
    t.equal(plateau.isValidSpot(position), true, 'The result should be as expected.');
    position.x = 3;
    position.y = 4;
    t.equal(plateau.isValidSpot(position), false, 'The result should be as expected.');
});
