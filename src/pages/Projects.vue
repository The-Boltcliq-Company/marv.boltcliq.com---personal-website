<template>
    <div class="projects">
        <Loader/>
        <Navigation/>
        <Projects/>
        <Footer/>
    </div>
</template>

<script>
    export default {
        components: {
            Projects: () => import('../components/Projects/Projects'),
        }
    }
</script>
