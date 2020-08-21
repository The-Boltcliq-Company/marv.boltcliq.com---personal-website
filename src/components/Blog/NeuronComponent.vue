<template>
    <div>
        <br>
        <main class="page-content">
            <div class="card">
                <div class="content">
                    <h2 class="title">Explore The Galaxy</h2>
                    <p class="copy">Seriously, straight up, just blast off into outer space today</p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        components: {},
    }
</script>

<style scoped>
    .page-content {
        display: grid;
        grid-gap: 1rem;
        padding: 0.5rem;
        max-width: 1024px;
        margin: 0 auto;
    }
    @media (min-width: 600px) {
        .page-content {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 800px) {
        .page-content {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .card {
        position: relative;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: end;
        align-items: flex-end;
        overflow: hidden;
        padding: 1rem;
        width: 100%;
        text-align: center;
        color: #fff;
        border-color: rgb(226, 255, 183);
        background-color: rgba(231, 255, 116, 0);
    }

    @media (min-width: 600px) {
        .card {
            height: 300px;
        }
    }

    .content {
        position: relative;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        padding: 0.5rem;
    }

    .title {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.2;
    }

    .copy {
        font-size: 1.125rem;
        font-style: italic;
        line-height: 1.35;
    }

    @media (hover: hover) and (min-width: 600px) {
        .card:after {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        .content {
            -webkit-transform: translateY(calc(100% - 4.5rem));
            transform: translateY(calc(100% - 4.5rem));
        }
        .content > *:not(.title) {
            -webkit-transform: translateY(1rem);
            transform: translateY(1rem);
            -webkit-transition: opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
            transition: opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
            transition: transform var(--d) var(--e), opacity var(--d) var(--e);
            transition: transform var(--d) var(--e), opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
        }
    }

</style>