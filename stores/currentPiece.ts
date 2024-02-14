export const useCurrentPieceStore = defineStore("currentPiece", () => {
  const x = ref<number>(0);
  const y = ref<number>(0);
  const piece = ref<string>(" ");
  const color = ref<string>("");
  const possibleMoves = ref<Array<{ x: number; y: number }>>([]);

  return { x, y, piece, color, possibleMoves };
});
