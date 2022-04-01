<template>
    <div class="footer">
        <!-- soft skills and logo -->
        <section class="soft_logo">
            <soft-skills class="soft_skills" />
            <img src="@/assets/logo_full.png" alt="AP logo" />
        </section>
        <!-- summary 'about-me' -->
        <more-me />
        <!-- contact info -->
        <section class="contact_me">
            <h3>github:</h3>
            <a href="https://github.com/GitAPhan">github.com/GitAPhan</a>
            <h3>linkedin:</h3>
            <a href="https://linkedin.com/in/phandandrew">linkedin.com/in/phandandrew</a>
            <h3>email:</h3>
            <a href="mailto:itsandrewphan@gmail.com">itsandrewphan@gmail.com</a>
        </section>
    </div>
</template>

<script>
import SoftSkills from '@/components/SoftSkills.vue'
import MoreMe from '@/components/MoreMe.vue'
export default {
    components: { SoftSkills, MoreMe },
    name: 'contact-section',
}
</script>

<style lang="scss">
.footer {
    height: 100vh;
    max-height: 100%;
    display: grid;
    grid-template-rows: auto auto auto;
}
.soft_logo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: start;
    width: 100vw;
    padding: 10px 0px;
    img {
        max-width: 40vw;
    }
}
.contact_me {
    place-self: center;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr;
    padding: 15px;
}
.soft_skills {
    display: grid;
    grid-auto-flow: row;
    justify-self: end;
    row-gap: 0px;
}
</style>