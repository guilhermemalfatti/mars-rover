var config = require('../config/index');
function plateau(args){
  if (isNaN(args.x) || isNaN(args.y)) {
      return 'Coordinates should be numbers';
    } else {
      return true;
    }
}

function landing(args){
  if(['N', 'S', 'E', 'W'].indexOf(args.compass_point) < 0 ){
      return 'Compass point should be N, S, E or W.';
  }else  if (isNaN(args.x) || isNaN(args.y)) {
    return 'Coordinates should be numbers';
  } else {
    return true;
  }
}

function instructions(args){
  var error = false;
  args.instructions.split('').map(function(item){
    if(config.commands.indexOf(item) < 0 ){
      error = true;
    }
  });
  
  if(error){
    return 'Instructions should be M, L or R.';
  }else{
    return true;
  }
}

exports.plateau = plateau;
exports.landing = landing;
exports.instructions = instructions;