declare interface Piece {
    name: 'pawn' | 'rock' | 'knight' | 'bishop' | 'king' | 'queen',
    color: 'white' | 'black',
    availableMoves: string[],
}
