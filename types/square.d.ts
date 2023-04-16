declare interface Square {
    row: string,
    col: string,
    piece?: {
        name: string,
        availableSquares: Square[],
    },
}
