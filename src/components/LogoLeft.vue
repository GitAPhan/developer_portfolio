<template>
    <div class="main_left">
        <hero-message class="hero" />
    </div>
</template>

<script>
import HeroMessage from "@/components/HeroMessage.vue"
export default {
    name: 'logo-left',
    components: {
        HeroMessage,
    },
}
</script>

<style>
.main_left {
    background-image: url('../assets/logo_left.png');
    background-position: right;
}
.hero {
    position: relative;
    top: 30vh;
    left: 8%;
    width: 50%;
}
</style>