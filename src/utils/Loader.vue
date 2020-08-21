<template>
    <div>
        <vue-topprogress color="#000" ref="topProgress"></vue-topprogress>
    </div>
</template>

<script>
    import {vueTopprogress} from 'vue-top-progress'

    export default {
        mounted() {
            this.$refs.topProgress.start()

            // Use setTimeout for demo
            setTimeout(() => {
                this.$refs.topProgress.done()
            }, 1000)
        },
        components: {
            vueTopprogress
        }
    }
</script>