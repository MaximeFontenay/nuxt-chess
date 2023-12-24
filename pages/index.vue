<template>
    <main>

        <Navbar />
        
        <div class="board-wrapper">
            <Board></Board>
        </div>
        <aside class="sidebar sidebar-right">

        </aside>
    </main>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@use '@/assets/_variables.scss' as *;

main {
    @include flex(space-between, center);
    width: 100%;
    height: 100vh;
    background-image: url('/assets/img/bg-blury.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top left;
}


.board-wrapper {
    @include flex();
    width: 100%;
    height: 100%;   
}
</style>