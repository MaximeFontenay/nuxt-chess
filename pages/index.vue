<template>
	<div class="board-wrapper">
        <Board></Board>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

.board-wrapper {
    @include flex();
}

</style>