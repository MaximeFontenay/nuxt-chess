export function generatePossibleMovesForPawn(x:number, y:number, color:string = 'white') {
    const possibleMoves = [];
    
    if(color === 'white') {
        if(y === 2) {
            possibleMoves.push({ x, y: y + 2 });
        }
        if(y < 8) {
            possibleMoves.push({ x, y: y + 1 });
        }
        if(x > 0) {
            possibleMoves.push({ x: x - 1, y: y + 1 });
        }
        if(x < 8) {
            possibleMoves.push({ x: x + 1, y: y + 1 });
        }
    }
    else {
        if(y === 7) {
            possibleMoves.push({ x, y: y - 2 });
        }
        if(y > 1) {
            possibleMoves.push({ x, y: y - 1 });
        }
        if(x > 0) {
            possibleMoves.push({ x: x - 1, y: y - 1 });
        }
        if(x < 8) {
            possibleMoves.push({ x: x + 1, y: y - 1 });
        }
    }



    return possibleMoves;
}

export function generatePossibleMovesForKnight(x:number, y:number, color:string = 'white') {
    const possibleMoves = [];
    
    if(x > 1 && y > 2) {
        possibleMoves.push({ x: x - 1, y: y - 2 });
    }
    if(x > 2 && y > 1) {
        possibleMoves.push({ x: x - 2, y: y - 1 });
    }
    if(x < 8 && y > 2) {
        possibleMoves.push({ x: x + 1, y: y - 2 });
    }
    if(x < 7 && y > 1) {
        possibleMoves.push({ x: x + 2, y: y - 1 });
    }
    if(x > 1 && y < 7) {
        possibleMoves.push({ x: x - 1, y: y + 2 });
    }
    if(x > 2 && y < 8) {
        possibleMoves.push({ x: x - 2, y: y + 1 });
    }
    if(x < 8 && y < 7) {
        possibleMoves.push({ x: x + 1, y: y + 2 });
    }
    if(x < 7 && y < 8) {
        possibleMoves.push({ x: x + 2, y: y + 1 });
    }


    return possibleMoves;
}

export function generatePossibleMovesForBishop(x:number, y:number, color:string = 'white') {
    const possibleMoves = [];
    

    for(let i = 1; i < 8; i++) {
        if(x + i > 8 || y + i > 8) {
            break;
        }
        possibleMoves.push({ x: x + i, y: y + i });
    }

    for(let i = 1; i < 8; i++) {
        if(x - i < 1 || y - i < 1) {
            break;
        }
        possibleMoves.push({ x: x - i, y: y - i });
    }

    for(let i = 1; i < 8; i++) {
        if(x + i > 8 || y - i < 1) {
            break;
        }
        possibleMoves.push({ x: x + i, y: y - i });
    }

    for(let i = 1; i < 8; i++) {
        if(x - i < 1 || y + i > 8) {
            break;
        }
        possibleMoves.push({ x: x - i, y: y + i });
    }

    return possibleMoves;
}

export function generatePossibleMovesForRook(x:number, y:number, color:string = 'white') {
    const possibleMoves = [];
    

    for(let i = 1; i < 8; i++) {
        if(x + i > 8) {
            break;
        }
        possibleMoves.push({ x: x + i, y });
    }

    for(let i = 1; i < 8; i++) {
        if(x - i < 1) {
            break;
        }
        possibleMoves.push({ x: x - i, y });
    }

    for(let i = 1; i < 8; i++) {
        if(y - i < 1) {
            break;
        }
        possibleMoves.push({ x, y: y - i });
    }

    for(let i = 1; i < 8; i++) {
        if(y + i > 8) {
            break;
        }
        possibleMoves.push({ x, y: y + i });
    }

    return possibleMoves;
}

export function generatePossibleMovesForQueen(x:number, y:number, color:string = 'white') {
    const possibleMoves = [];

    possibleMoves.push(...generatePossibleMovesForBishop(x, y, color));
    possibleMoves.push(...generatePossibleMovesForRook(x, y, color));

    return possibleMoves;
}

export function generatePossibleMovesForKing(x:number, y:number, color:string = 'white') {
    const possibleMoves = [];

    if(x > 1) {
        possibleMoves.push({ x: x - 1, y });
    }
    if(x < 8) {
        possibleMoves.push({ x: x + 1, y });
    }
    if(y > 1) {
        possibleMoves.push({ x, y: y - 1 });
    }
    if(y < 8) {
        possibleMoves.push({ x, y: y + 1 });
    }
    if(x > 1 && y > 1) {
        possibleMoves.push({ x: x - 1, y: y - 1 });
    }
    if(x > 1 && y < 8) {
        possibleMoves.push({ x: x - 1, y: y + 1 });
    }
    if(x < 8 && y > 1) {
        possibleMoves.push({ x: x + 1, y: y - 1 });
    }
    if(x < 8 && y < 8) {
        possibleMoves.push({ x: x + 1, y: y + 1 });
    }

    return possibleMoves;
}