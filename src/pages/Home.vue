<template>
    <div class="home">
        <Loader/>
        <Navigation/>
        <HeaderImage/>
        <HeaderBody/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            HeaderImage: () => import('../components/Home/Header-Image.vue'),
            HeaderBody: () => import('../components/Home/Header-Body.vue')
        }
    }
</script>
