<template>
	<div class="board">

		<div class="board__row">
			<div class="tile 1"></div>
			<div class="tile 2"></div>
			<div class="tile 3"></div>
			<div class="tile 4"></div>
			<div class="tile 5"></div>
			<div class="tile 6"></div>
			<div class="tile 7"></div>
			<div class="tile 8"></div>
		</div>
		<div class="board__row">
			<div class="tile 9"></div>
			<div class="tile 10"></div>
			<div class="tile 11"></div>
			<div class="tile 12"></div>
			<div class="tile 13"></div>
			<div class="tile 14"></div>
			<div class="tile 15"></div>
			<div class="tile 16"></div>
		</div>
		<div class="board__row">
			<div class="tile 17"></div>
			<div class="tile 18"></div>
			<div class="tile 19"></div>
			<div class="tile 20"></div>
			<div class="tile 21"></div>
			<div class="tile 22"></div>
			<div class="tile 23"></div>
			<div class="tile 24"></div>
		</div>
		<div class="board__row">
			<div class="tile 25"></div>
			<div class="tile 26"></div>
			<div class="tile 27"></div>
			<div class="tile 28"></div>
			<div class="tile 29"></div>
			<div class="tile 30"></div>
			<div class="tile 31"></div>
			<div class="tile 32"></div>
		</div>
		<div class="board__row">
			<div class="tile 33"></div>
			<div class="tile 34"></div>
			<div class="tile 35"></div>
			<div class="tile 36"></div>
			<div class="tile 37"></div>
			<div class="tile 38"></div>
			<div class="tile 39"></div>
			<div class="tile 40"></div>
		</div>
		<div class="board__row">
			<div class="tile 41"></div>
			<div class="tile 42"></div>
			<div class="tile 43"></div>
			<div class="tile 44"></div>
			<div class="tile 45"></div>
			<div class="tile 46"></div>
			<div class="tile 47"></div>
			<div class="tile 48"></div>
		</div>
		<div class="board__row">
			<div class="tile 49"></div>
			<div class="tile 50"></div>
			<div class="tile 51"></div>
			<div class="tile 52"></div>
			<div class="tile 53"></div>
			<div class="tile 54"></div>
			<div class="tile 55"></div>
			<div class="tile 56"></div>
		</div>
		<div class="board__row">
			<div class="tile 57"></div>
			<div class="tile 58"></div>
			<div class="tile 59"></div>
			<div class="tile 60"></div>
			<div class="tile 61"></div>
			<div class="tile 62"></div>
			<div class="tile 63"></div>
			<div class="tile 64"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()


</script>

<style lang="scss" scoped>
@use 'assets/_variables.scss' as *;

.board {
	@include flex(flex-start, flex-start, column);
	width: 700px;
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
			aspect-ratio: 1;

			&:nth-child(odd) {
				background-color: $light;
			}
			&:nth-child(even) {
				background-color: $red;
			}
		}
	}

}

</style>