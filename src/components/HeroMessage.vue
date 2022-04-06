<template>
    <div class="hero_message">
        <img class="hero" src="../assets/heroL_hello_world.png" alt="hello world" />
        <img ref="andrew" class="hero" src="../assets/heroL_andrew_white.png" alt="I'm Andrew" />
        <img ref="phan" class="hero" src="../assets/heroL_phan_black.png" alt="Phan" />
        <img class="hero" src="../assets/heroL_full_stack.png" alt="a Full-Stack" />
        <img ref="developer" class="hero" src="../assets/heroL_developer.png" alt="Developer" />
        <v-avatar class="avatar" :size="avatar_size">
            <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
        </v-avatar>
    </div>
</template>

<script>
import ScrollMagic from "scrollmagic";
export default {
    name: 'hero-message',
    data() {
        return {
            avatar_size: undefined
        }
    },
    mounted() {
        // determine avatar size based off previous sibling's clientWidth
        this.$nextTick(()=>{this.avatarSize()})
        // scroll magic for avatar disappearing        
        var controller = new ScrollMagic.Controller();
        // build scenes
        new ScrollMagic.Scene({
            triggerElement: "#avatar_trigger",
            offset: 50,
            triggerHook: 0.8,
        })
            .setClassToggle(".avatar", "hide") // add class toggle
            .addTo(controller);
    },
    created() {
        window.addEventListener("resize", this.avatarSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.avatarSize);
    },
    methods: {
        avatarSize() {
            this.$root.$emit('avatar_resize', this.$refs.developer.clientWidth*.8)
            this.avatar_size = Math.round(this.$refs.developer.clientWidth * .69)
        }
    }
}
</script>

<style lang="scss" scoped>
.hero_message {
    display: grid;
    .avatar {
        margin-top: 14%;
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
.avatar {
    opacity: 1;
    transform: none;
    transition: all 1s ease-in-out;
}
.avatar.hide {
    opacity: 0;
    transform: translate(80px, -180px);
}
</style>