export function getBoardFromCoords(x:number, y:number) {
    return {
        y: Math.abs(Math.abs(y) - 8) - 1,
        x: x - 1,
    };
}