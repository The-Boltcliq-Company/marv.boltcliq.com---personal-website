<template>
    <div class="design">
        <Loader/>
        <Navigation/>
        <Designs/>
        <Rating/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Design',
        components: {
            Designs: () => import('../components/Design/Design.vue'),
            Rating: () => import('../components/Design/Rating.vue'),
        }
    }
</script>
