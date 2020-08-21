<template>
    <div class="blog">
        <Loader/>
        <Navigation/>
        <Neuron/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        components: {
            Neuron: () => import('../components/Blog/NeuronComponent.vue'),
        }
    }
</script>
