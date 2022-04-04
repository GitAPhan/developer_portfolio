<template>
    <div class="hero_message">
        <img class="hero1" src="../assets/heroL_hello_world.png" alt="hello world" />
        <img class="hero2" src="../assets/heroL_andrew_white.png" alt="I'm Andrew" />
        <img class="hero3" src="../assets/heroL_phan_black.png" alt="Phan" />
        <img class="hero4" src="../assets/heroL_full_stack.png" alt="a Full-Stack" />
        <img class="hero5" src="../assets/heroL_developer.png" alt="Developer" />
        <v-avatar class="avatar" :size="128">
            <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
        </v-avatar>
    </div>
</template>

<script>
export default {
    name: 'hero-message'
}
</script>

<style lang="scss" scoped>
.hero_message {
    >img {
        display: block;
    }
    .avatar {
        margin-top: 12%;
    }
    :nth-child(1) {
        width: 25vh;
    }
    :nth-child(2) {
        width: 23.5vh;
    }
    :nth-child(3) {
        width: 20vh;
    }
    :nth-child(4) {
        width: 19vh;
    }
    :nth-child(5) {
        width: 17.8vh;
    }
}
</style>