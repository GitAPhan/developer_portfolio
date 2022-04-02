<template>
    <div class="hero_message">
        <img class="hero1" src="../assets/heroL_hello_world.png" alt="hello world" />
        <img class="hero2" src="../assets/heroL_andrew_white.png" alt="I'm Andrew" />
        <img class="hero3" src="../assets/heroL_phan_black.png" alt="Phan" />
        <img class="hero4" src="../assets/heroL_full_stack.png" alt="a Full-Stack" />
        <img class="hero5" src="../assets/heroL_developer.png" alt="Developer" />
    </div>
</template>

<script>
export default {
    name: 'hero-message'
}
</script>

<style lang="scss" scoped>
.hero_message>img {
    display: block;
}
.hero1 {
    width: 25vh;
}
.hero2 {
    width: 23.5vh;
}
.hero3 {
    width: 20vh;
}
.hero4 {
    width: 19vh;
}
.hero5 {
    width: 17.8vh;
}
</style>