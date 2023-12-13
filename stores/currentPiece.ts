export const useCurrentPieceStore = defineStore('currentPiece', () => {

    const currentPiece = ref({
        x: 0,
        y: 0,
        piece: ' ',
        color: 'white',
        possibleMoves: []
    })

    return { currentPiece }
})