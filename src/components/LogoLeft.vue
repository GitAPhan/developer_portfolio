<template>
    <div class="main_left">
        <section class="hero">
            <img class="hero1" src="../assets/heroL_hello_world.png" alt="hello world">
            <img class="hero2" src="../assets/heroL_andrew_white.png" alt="I'm Andrew">
            <img class="hero3" src="../assets/heroL_phan_black.png" alt="Phan">
            <img class="hero4" src="../assets/heroL_full_stack.png" alt="a Full-Stack">
            <img class="hero5" src="../assets/heroL_developer.png" alt="Developer">
        </section>
    </div>
</template>

<script>
export default {
    name: 'logo-left',
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
.hero1 {
    width: 100%;
}
.hero2 {
    width: 90%;
}
.hero3 {
    width: 76%;
}
.hero4 {
    width: 70%;
}
.hero5 {
    width: 66%;
}
</style>