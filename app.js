var vorpal = require('vorpal')();
var validator = require('./validators/index');
var control = require('./control/index');
var _ = require('lodash');
var plateau;
var rovers = [];
vorpal
  .delimiter('mars-rover$')
  .show();

vorpal
  .command('Plateau <x> <y>', 'Create a Plateau.')
  .validate(validator.plateau)
  .action(function(args, cb){
    plateau = control.createPlateau(args.x, args.y);
    cb();
  });

vorpal
  .command('Rover Landing <x> <y> <compass_point>', 'Landing a Rover at Mars.')
  .validate(validator.landing)
  .action(function(args, cb){
    var rover = control.createRover(plateau);
    var pos = {
      x: args.x,
      y: args.y
    }
    rover.landing(pos, args.compass_point);
    rovers.push(rover);
    cb();
  });

vorpal
  .command('Rover Instructions <instructions>', 'Instructions to the current Rover.')
  .validate(validator.instructions)
  .action(function(args, cb){
    var rover = _.last(rovers);
    rover.navigate(args.instructions); 
    var location = rover.getCurrentlocation();    
    console.log('Rover' + rovers.length + ':', location.x, location.y, location.front);
    cb();
  });
