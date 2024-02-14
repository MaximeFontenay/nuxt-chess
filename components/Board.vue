<script lang="ts" setup>
const boardStore = useBoardStore()
const currentPieceStore = useCurrentPieceStore()
const appConfig = useAppConfig()
const tileSize = ref<number>(10)
const board = ref<HTMLInputElement | null>(null);
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const reversedNumbers = Array.from({ length: 8 }, (_, i) => 8 - i);
const darkTileColor = computed(() => appConfig.theme.colors.darkTile)
const lightTileColor = computed(() => appConfig.theme.colors.lightTile)


const handleResize = () => {
	if (board.value?.offsetWidth) {
		if (window.innerWidth > window.innerHeight) {
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

const getYPosition = (num: number) => {
	return Math.abs(Math.abs(num) - 8) + 1
}

const getColor = (piece: string): string => {
	if (piece.toLocaleLowerCase() === piece) {
		return 'white'
	}
	return 'black'
}

const handlePossibleMoves = (moves?: { x: number, y: number }[]) => {
	const previousPossibleMoves = document.querySelectorAll('.possible-move')
	previousPossibleMoves.forEach(move => {
		move.classList.remove('possible-move')
	})

	if (!moves) return

	moves.forEach(move => {
		const tile = document.querySelector(`.row-${getYPosition(move.y)} .tile-${move.x}`)
		if (tile) {
			tile.classList.add('possible-move')
		}
	})
}

const movePiece = (e: Event, tileWithPiece:boolean, x: number, y: number) => {
	if (tileWithPiece) {
			console.log('---------------');
			console.log('---------------');
			console.log('---------------');
			console.log('current piece: ');
			console.log(currentPieceStore);
			console.log('---------------');
			console.log('---------------');
	}

	if ((e.target as HTMLElement)?.classList.contains('possible-move')) {
		const pos = getBoardFromCoords(currentPieceStore.x, currentPieceStore.y)
		const piece = boardStore.board[pos.y][pos.x]

		// remove piece from old position based on currentPieceStore
		boardStore.board[pos.y][pos.x] = ' '
		// add piece to new position based on pos
		boardStore.board[y - 1][x - 1] = piece

		handlePossibleMoves()
	}
}


</script>

<template>
	<div ref="board" class="board" :style="{
		margin: `${tileSize}px`
	}">
		<!-- slot /-->
		<div v-for="(row, rowIndex) in boardStore.board" :key="rowIndex" class="board__row" :class="`row-${rowIndex + 1}`">
			<div ref="tile" v-for="(tile, tileIndex) in row" :key="tileIndex" class="tile" :class="`tile-${tileIndex + 1}`"
				:style="{
					width: `${tileSize}px`,
					height: `${tileSize}px`
				}" @click="movePiece($event, tile.trim().length > 0, tileIndex + 1, rowIndex + 1)">
				<Piece v-if="tile.trim().length > 0" :name="tile.toLocaleLowerCase().trim()" :color="getColor(tile)"
					:size="tileSize" :position="{
						x: tileIndex + 1,
						y: getYPosition(rowIndex + 1),
					}" @possibleMoves="handlePossibleMoves($event)" />
			</div>
		</div>

		<div class="marker-col" :style="{ width: `${tileSize}px` }">
			<div class="marker" v-for="number in reversedNumbers" :key="number" :style="{
				width: `${tileSize}px`,
				height: `${tileSize}px`,
				minWidth: `${tileSize}px`,
				minHeight: `${tileSize}px`,
			}">
				{{ number }}
			</div>
		</div>
		<div class="marker-row" :style="{ height: `${tileSize}px` }">
			<div class="marker" v-for="(letter, i) in letters" :key="letter" :style="{
				width: `${tileSize}px`,
				height: `${tileSize}px`,
				minWidth: `${tileSize}px`,
				minHeight: `${tileSize}px`
			}">
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
	max-width: 80vw;
	max-height: 80vh;
	margin: 50px auto;
	aspect-ratio: 1;
	user-select: none;

	&__row {
		@include flex(center, center);

		&:nth-child(odd) {
			flex-direction: row;

			.tile {
				&:nth-of-type(odd) {
					background-color: v-bind(lightTileColor);
				}

				&:nth-of-type(even) {
					background-color: v-bind(darkTileColor);
					box-shadow: 0px 0px 20px 30px rgba(175, 175, 175, 0.1) inset;
				}
			}
		}

		&:nth-child(even) {
			.tile {
				&:nth-of-type(even) {
					background-color: v-bind(lightTileColor);
				}

				&:nth-of-type(odd) {
					background-color: v-bind(darkTileColor);
					box-shadow: 0px 0px 20px 30px rgba(175, 175, 175, 0.1) inset;
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
			backdrop-filter: blur(20px);
			will-change: width, height;
			transition: 0s ease-in-out;

/*
			&.possible-move:has(.piece):before,
			&.possible-move:has(.piece):after {
				display: none;
			}
			*/

			&::before {
				content: '';
				@include position(0, 0);
				z-index: 1;
				width: 100%;
				height: 100%;
				pointer-events: none;
				background-color: var(--accentColor);
				opacity: 0;
			}

			&::after {
				content: '';
				@include position(0, 0);
				inset: 50%;
				z-index: 2;
				translate: -50% -50%;
				border-radius: 50%;
				width: 25%;
				height: auto;
				aspect-ratio: 1;
				border: calc(.5vw + .5vh) transparent double;
				background-color: transparent;
				opacity: .75;
				pointer-events: none;
			}

			&.possible-move {
				cursor: pointer;
				background: rgba(255, 0, 0, 0.493) !important;

				&:hover::before {
					opacity: .2;
					transition: .25s ease-in-out;
				}

				&::after {
					border-color: var(--accentColor);
					transition: .25s ease-in-out;
				}

				.piece {
					pointer-events: none;
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
			@include position(0, 0);
			translate: -100% 0;
			height: 100%;
		}

		&-row {
			@include flex(flex-start, center);
			@include position($bottom: 0, $left: 0);
			translate: 0 100%;
			width: 100%;
		}
	}
}
</style>