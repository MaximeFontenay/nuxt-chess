<template>
    <main>

        <Navbar />

        <div class="board-wrapper">
            <Board></Board>
        </div>
        <aside class="sidebar sidebar-right">
            <div class="">
                <p>X: <span>{{ currentPieceStore.x }}</span></p>
                <p>Y: <span>{{ currentPieceStore.y }}</span></p>
                <div class="line"></div>
                <p>Piece: <span>{{ currentPieceStore.piece }}</span></p>
                <p>Color: <span>{{ currentPieceStore.color }}</span></p>
                <div class="line"></div>
                <p>Moves:</p>
                <div class="grid">
                    <span v-for="(move, i) in currentPieceStore.possibleMoves" key="i">
                        {{ JSON.stringify(move, null, 2) }}
                    </span>
                </div>
            </div>
            <div class="">
                <div class="line"></div>
                <p>Board:</p>
                <ol>
                    <li v-for="line in boardStore.board">
                        <span>{{ line }}</span>
                    </li>
                </ol>
            </div>
        </aside>
    </main>
</template>

<script lang="ts" setup>
const currentPieceStore = useCurrentPieceStore();
const boardStore = useBoardStore();
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

.sidebar-right {
    background-color: #ffffff8b;
    backdrop-filter: blur(107px);
    padding: 12px 20px;
    color: black;
    min-width: 350px;

    p {
        width: 100%;
        margin-bottom: 5px;
        font-weight: 400;
    }

    span {
        font-weight: 700;
    }

    .line {
        background-color: black;
        height: 2px;
        width: 100%;
        display: block;
        margin: 10px 0;
    }

    .grid {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        width: 100%;
    }

    pre,
    code {
        font-family: monospace;
        width: fit-content;
    }
}
</style>