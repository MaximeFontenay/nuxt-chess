<script lang="ts" setup>
import { useBoardStore } from '@/stores/chessBoard'
const store = useBoardStore()

const appConfig = useAppConfig()
const tileSize = ref(0)
const board = ref<HTMLInputElement | null>(null);
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const reversedNumbers = Array.from({ length: 8 }, (_, i) => 8 - i);

const handleResize = () => {
	if(board.value?.offsetWidth) {
		if(window.innerWidth > window.innerHeight) {
			tileSize.value = board.value.offsetHeight / 8;
		}
		else {
			tileSize.value = board.value.offsetWidth / 8;
		}
	}
}

onMounted(() => {
	handleResize()
	window.addEventListener('resize', handleResize);
});

const getYPosition = (num:number) => {
	return Math.abs(Math.abs(num) - 8) + 1
}


const getColor = (piece:string):string => {
	if (piece.toLocaleLowerCase() === piece) {
		return 'white'
	}
	return 'black'
} 

const piece = ref(null)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(piece)


const currentPosition = ref({x: 0, y: 0})

const handleCurrentPosition = (position:{x:number, y:number}) => {
	position = {
		x: position.x - 1,
		y: getYPosition(position.y) - 1
	}
	currentPosition.value = position
}

const handlePossibleMoves = (moves?:{x:number, y:number}[]) => {
	const previousPossibleMoves = document.querySelectorAll('.possible-move')
	previousPossibleMoves.forEach(move => {
		move.classList.remove('possible-move')
	})

	if(!moves) return

	moves.forEach(move => {
		const tile = document.querySelector(`.row-${getYPosition(move.y)} .tile-${move.x}`)
		if(tile) {
			tile.classList.add('possible-move')
		}
	})
}

const movePiece = (e:any, x:number, y:number) => {
	//console.log(e.target);
	if(e.target.classList.contains('possible-move')) {
		const posY = currentPosition.value.y
		const posX = currentPosition.value.x
		const piece = store.board[posY][posX]

		store.board[posY][posX] = ' '
		store.board[y - 1][x - 1] = piece

		handlePossibleMoves()
	}
}

</script>

<template>
	<div 
		ref="board"
		class="board" 
		:style="{
			margin: `${tileSize}px`
		}"
	>
		<!-- slot /-->
		<div 
			v-for="(row, rowIndex) in store.board"
			:key="rowIndex"
			class="board__row"
			:class="`row-${rowIndex + 1}`"
		>
			<div 
				ref="tile"
				v-for="(tile, tileIndex) in row"
				:key="tileIndex"
				class="tile"
				:class="`tile-${tileIndex + 1}`"
				:style="{
					width: `${tileSize}px`,
				 	height: `${tileSize}px`
				}"
				@click="movePiece($event, tileIndex + 1, rowIndex + 1)"
			>
				<Piece
					v-if="tile.trim().length > 0"
                    :name="tile.toLocaleLowerCase().trim()"
                    :color="getColor(tile)"
					:size="tileSize"
					:position="{
                        x: tileIndex + 1,
                        y: getYPosition(rowIndex + 1),
                    }"
					@currentPosition="handleCurrentPosition($event)"
					@possibleMoves="handlePossibleMoves($event)"
                />
			</div>
		</div>

		<div class="marker-col" :style="{width: `${tileSize}px`}">
			<div 
				class="marker"
				v-for="number in reversedNumbers" 
				:key="number"
				:style="{
					width: `${tileSize}px`,
					height: `${tileSize}px`,
					minWidth: `${tileSize}px`,
				 	minHeight: `${tileSize}px`,
				}"
			>
				{{ number }}	
			</div>
		</div>
		<div class="marker-row" :style="{height: `${tileSize}px`}">
			<div 
				class="marker"
				v-for="(letter, i) in letters" 
				:key="letter"
				:style="{
					width: `${tileSize}px`,
					height: `${tileSize}px`,
					minWidth: `${tileSize}px`,
				 	minHeight: `${tileSize}px`
				}"
			>
				{{ letter }} {{ i + 1 }}
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
@use 'assets/_variables.scss' as *;

.board {
	--tile-light: #{$lightTile};
	--tile-dark: #{$darkTile};
	--accentColor: #{$yellow};

	@include flex(flex-start, flex-start, column);
	position: relative;
	width: 100%;
	height: 100%;
	max-width: 80vw;
	max-height: 80vh;
	margin: 50px auto;
	aspect-ratio: 1;

	&__row {
		@include flex(center, center);

		&:nth-child(odd) {
			flex-direction: row;
			.tile {
				&:nth-of-type(odd) {
					background-color: var(--tile-light);
				}
				&:nth-of-type(even) {
					background-color: var(--tile-dark);
				}
			}
		}
		&:nth-child(even) {
			.tile {
				&:nth-of-type(even) {
					background-color: var(--tile-light);
				}
				&:nth-of-type(odd) {
					background-color: var(--tile-dark);
				}
			}
			.marker {
				order: 1
			}
		}

		.tile {
			@include flex();
			aspect-ratio: 1;
			width: 50px;
			height: 50px;
			color: $black;
			font-size: 1.2vw;
			position: relative;
			will-change: width, height;
			transition: .25s ease-in-out;

			&.possible-move:has(.piece):before, &.possible-move:has(.piece):after {
				display: none;
			}

			&::before {
				content: '';
				@include position(0,0);
				z-index: 1;
				width: 100%;
				height: 100%;
				pointer-events: none;
				background-color: var(--accentColor);
				opacity: 0;
			}

			&::after {
				content: '';
				@include position(0,0);
				inset: 50%;
				z-index: 2;
				translate: -50% -50%;
				border-radius: 50%;
				width: 25%;
				height: auto;
				aspect-ratio: 1;
				pointer-events: none;
				border: 3px solid transparent;
				background-color: transparent;
			}

			&.possible-move {
				cursor: pointer;

				&:hover::before {
					opacity: .2;
					transition: .25s ease-in-out;
				}
				&::after {
					border-color: var(--accentColor);
					transition: .25s ease-in-out;
				}
			}
		}
	}


	.marker {
		@include flex();
		font-size: 3vw;
		overflow: hidden;
		
		&-col {
			@include flex(center, center, column);
			@include position(0,0);
			translate: -100% 0;
			height: 100%;
		}

		&-row {
			@include flex(flex-start, center);
			@include position($bottom:0,$left:0);
			translate: 0 100%;
			width: 100%;
		}
	}
}

</style>