var test = require('tape');
var configs = require('../../config/index');

test('Validate configs', function(t){
    t.plan(3);
    var expetedResult = ['L', 'R', 'M'];

    t.deepEqual(configs.commands, expetedResult, 'The result should be as expected.');

    expetedResult = {
        E:['x', +1],
        W:['x', -1],
        S:['y', -1],
        N:['y', +1]
    };
    t.deepEqual(configs.moveMap, expetedResult, 'The result should be as expected.');
    
    expetedResult = {"N":{"L":"W","R":"E"},"S":{"L":"E","R":"W"},"E":{"L":"N","R":"S"},"W":{"L":"S","R":"N"}};
    t.deepEqual(configs.spinMap, expetedResult, 'The result should be as expected.');

});
