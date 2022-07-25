<template>
    <div id="hide" class="footer">
        <!-- soft skills and logo -->
        <section class="soft_logo">
            <soft-skills v-if="$mq != 'lg'" />
            <img class="contact_logo" src="@/assets/logo_full.png" alt="AP logo" />
            <hero-message :color_state="2" class="contact_hero" v-if="$mq === 'lg'" />
        </section>
        <section class="contact_right">
            <!-- summary 'about-me' -->
            <more-me />
            <tools-tech v-if="$mq === 'lg'" />
            <!-- contact info -->
            <article class="contact_me">
                <h3>github:</h3>
                <a href="https://github.com/GitAPhan">github.com/GitAPhan</a>
                <h3>linkedin:</h3>
                <a href="https://linkedin.com/in/phandandrew">linkedin.com/in/phandandrew</a>
                <h3>email:</h3>
                <a href="mailto:itsandrewphan@gmail.com">itsandrewphan@gmail.com</a>
            </article>
        </section>
    </div>
</template>

<script>
import SoftSkills from '@/components/SoftSkills.vue'
import MoreMe from '@/components/MoreMe.vue'
import HeroMessage from '@/components/HeroMessage.vue'
import ToolsTech from '@/components/ToolsTech.vue'
export default {
    components: { SoftSkills, MoreMe, HeroMessage, ToolsTech },
    name: 'contact-section',
}
</script>

<style lang="scss">
.footer {
    height: 100%;
    max-height: 100%;
    display: grid;
    // overflow: hidden;
    grid-template-rows: auto auto auto;
}
.soft_logo {
    display: grid;
    align-items: center;
    padding: 10px 0px;
    img {
        max-width: 30%;
    }
    > .contact_logo {
        max-width: 40%;
        max-height: 40%;
    }
}
.contact_me {
    place-self: center;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr;
    padding: 15px;
}
@media screen and (max-width: 1000px) {
    .soft_logo {
        grid-template-columns: 1fr 1fr;
        width: 100%;
        justify-items: start;
        .soft_skills {
            grid-auto-flow: row;
            justify-self: end;
        }
    }
}
@media screen and (min-width: 1000px) {
    .hero_message.contact_hero {
        // transform: translateY(-100vh);
        align-self: end;
        .avatar {
            display: none;
        }
    }
    .footer {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: none;
        column-gap: 20px;
    }
    .soft_logo {
        grid-auto-flow: row;
        align-self: center;
        justify-self: end;
        padding: 0;
        height: 70%;
        max-height: 1000px;
    }
    .contact_right {
        max-height: 1000px;
        height: 70%;
        display: grid;
        align-self: center;
        row-gap: 7%;
        // align-items: center;
        justify-self: start;
        > .more_me_container {
            padding: 0;
        }
    }
    .contact_me {
        justify-self: start;
        padding: 0;
    }
}
</style>