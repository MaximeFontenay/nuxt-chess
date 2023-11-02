// stores/counter.js
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
    const defaultBoard = [
        ['R', 'K', 'B', 'Q', 'K', 'B', 'K', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'k', 'b', 'q', 'k', 'b', 'k', 'r'],
    ]

    const board = reactive([
        ['R', 'K', 'B', 'Q', 'K', 'B', 'K', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'k', 'b', 'q', 'k', 'b', 'k', 'r'],
    ])

    return { defaultBoard, board }
})