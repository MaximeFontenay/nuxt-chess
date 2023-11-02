<script lang="ts" setup>
import { useBoardStore } from '@/stores/chessBoard'
const store = useBoardStore()

const appConfig = useAppConfig()
const tileSize = ref(0)
const board = ref<HTMLInputElement | null>(null);

const handleResize = () => {
	if(board.value?.offsetWidth) {
		tileSize.value = board.value.offsetWidth / 8;
	}
}

onMounted(() => {
	handleResize()
	window.addEventListener('resize', handleResize);
	console.log(store);
});

const getColor = (piece:string):string => {
	if (piece.toLocaleLowerCase() === piece) {
		return 'white'
	}
	return 'black'
} 

const piece = ref(null)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(piece)


</script>

<template>
	<div class="board" ref="board">
		<!-- slot /-->
		<div 
			v-for="(row, rowIndex) in store.board"
			:key="rowIndex"
			class="board__row"
			:class="`row-${rowIndex}`"
		>
			<div 
				ref="tile"
				v-for="(tile, tileIndex) in row"
				:key="tileIndex"
				class="tile"
				:class="`tile-${tileIndex}`"
				:style="{
					width: tileSize + 'px',
					height: tileSize + 'px'
				}"
			>
				<Piece
                    :name="tile.toLocaleLowerCase()"
                    :color="getColor(tile)"
					:size="tileSize"
					:position="{
                        x: tileIndex,
                        y: rowIndex,
                    }"
                />
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
@use 'assets/_variables.scss' as *;

.board {
	@include flex(flex-start, flex-start, column);
	position: relative;
	width: 900px;
	margin: 50px auto;
	aspect-ratio: 1;

	&__row {
		@include flex(center, center);

		&:nth-child(odd) {
			flex-direction: row;
		}
		&:nth-child(even) {
			flex-direction: row-reverse;
		}

		.tile {
			@include flex();
			aspect-ratio: 1;
			color: $black;
			font-size: 1.2vw;
			will-change: width, height;

			&:nth-child(odd) {
				background-color: $lightTile;
			}
			&:nth-child(even) {
				background-color: $darkTile;
			}
		}
	}

}

</style>