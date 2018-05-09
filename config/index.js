exports.commands = ['L', 'R', 'M'];

exports.moveMap = {
    E:['x', +1],
    W:['x', -1],
    S:['y', -1],
    N:['y', +1]
};

exports.spinMap = {
    N: {
        L: 'W',
        R: 'E'
    },
    S:{
        L: 'E',
        R: 'W'
    },
    E:{
        L: 'N',
        R: 'S'
    },
    W:{
        L: 'S',
        R: 'N'
    }
};