function isSquareEmpty(x:number, y:number) {
    return true
}

function isSquareOccupiedByOpponent(x:number, y:number) {
    return true
}

export function generatePossibleMovesForPawn(x:number, y:number) {
    const possibleMoves = [];
    
    // Vérifier les mouvements vers l'avant
    if (isSquareEmpty(x, y - 1)) {
        possibleMoves.push({ x, y: y - 1 });
    }
    
    // Vérifier les mouvements de capture en diagonale
    if (isSquareOccupiedByOpponent(x - 1, y - 1)) {
        possibleMoves.push({ x: x - 1, y: y - 1 });
    }
    if (isSquareOccupiedByOpponent(x + 1, y - 1)) {
        possibleMoves.push({ x: x + 1, y: y - 1 });
    }
    
    return possibleMoves;
}

// Exemple d'utilisation
const pawnMoves = generatePossibleMovesForPawn(3, 2);
console.log(pawnMoves);