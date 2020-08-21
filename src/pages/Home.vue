<template>
    <div class="home">
        <Loader/>
        <Navigation/>
        <HeaderImage/>
        <HeaderBody/>
        <Service/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            HeaderImage: () => import('../components/Home/Header-Image.vue'),
            HeaderBody: () => import('../components/Home/Header-Body.vue'),
            Service: () => import('@/components/Home/Service.vue'),
        }
    }
</script>
