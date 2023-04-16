<template>
	<div>

		<h1>test</h1>

        <Board></Board>

        <Piece
            name="pawn"
            color="white"
            :available-moves="['b2', 'c3']"
        ></Piece>

        <Piece
            name="queen"
            color="black"
            :available-moves="['b2', 'c3']"
        ></Piece>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

</style>