<template>
    <div class="home">
        <Loader/>
        <Navigation/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            Contact: () => import('../components/Contact/Contact.vue'),
        }
    }
</script>
