var test = require('tape');
var validators = require('../../validators/index');

test('Validate Plateau', function(t){
    t.plan(2);
    var args = {
        x: 1,
        y: 2
    };
    var result;

    result = validators.plateau(args);
    t.equal(result, true, 'The result should be as expected.');

    args.x = 'a';
    result = validators.plateau(args);
    t.equal(result, 'Coordinates should be numbers', 'The result should be as expected.');
});


test('Validate landing', function(t){
    t.plan(3);
    var args = {
        x: 1,
        y: 2,
        compass_point: 'N'
    };
    var result;

    result = validators.landing(args);
    t.equal(result, true, 'The result should be as expected.');

    args.x = 'a';
    result = validators.landing(args);
    t.equal(result, 'Coordinates should be numbers', 'The result should be as expected.');
    
    args.compass_point = 'A';
    result = validators.landing(args);
    t.equal(result, 'Compass point should be N, S, E or W.', 'The result should be as expected.');
});


test('Validate instructions', function(t){
    t.plan(2);
    var args = {
        instructions: 'MLMRML'
    };
    var result;

    result = validators.instructions(args);
    t.equal(result, true, 'The reuslt should be as espected.');

    args.instructions = 'MLMRQ';
    result = validators.instructions(args);
    t.equal(result, 'Instructions should be M, L or R.', 'The reuslt should be as espected.');
    
});


