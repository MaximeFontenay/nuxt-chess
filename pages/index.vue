<template>
	<div>


        <Board> <!-- Retreive title size here to place correctly pieces on tiles -->
            <div class="pieces__wrapper">
                <Piece
                    name="pawn"
                    color="white"
                    :position="{
                        x: 5 * 87.5 - 43.75,
                        y: 3 * 87.5 - 43.75,
                    }"
                ></Piece>

                <Piece
                    name="queen"
                    color="black"
                    :position="{
                        x: 2 * 87.5 - 43.75,
                        y: 7 * 87.5 - 43.75,
                    }"
                ></Piece>
            </div>
        </Board>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

.pieces__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>