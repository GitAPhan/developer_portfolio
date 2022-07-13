<template>
    <div class="about_me_container">
        <section class="about_me">
            <!-- <figure>
                <h1>"Take risks now and do something bold. You won't regret it"</h1>
                <figcaption>- Elon Musk</figcaption>
            </figure> -->
            <!-- <p>Hi, I'm Andrew Phan. A recent graduate of a coding bootcamp receiving a Full-Stack Development Diploma. From my very first "Hello World!", a whole new world seemed to open up all around me. </p> -->
            <!-- <p>Growing up, I was always fascinated about technology and figuring how it works. I would spend my childhood taking apart anything electronic just to see if I can learn how it ticks and then put it back together (most of the time). I would still rememeber feeling a sense of accomplishment when I was able to see it working again and getting away with my perfect little crime. -->
            <!-- </p> -->
            <p>The first time I wrote "Hello World!". A whole new world opened up to me. The second time I wrote it. I was hooked! Finally, my curiousity which I thought disappeared came back running full force and I just couldn't get enough.</p>
            
        </section>
    </div>
</template>

<script>
export default {
    name: 'about-me',
}
</script>

<style lang="scss" scoped>
.about_me {
    display: grid;
    color: var(--v-primary);
    row-gap: 10px;
    font-size: 0.8em;
    max-width: 450px;

    >p:nth-child(2) {
        margin-bottom: 0px;
        color: var(--v-anchor);
    }
}

.about_me_container {
    display: grid;
    place-items: center;
    background-color: var(--v-secondary);
    padding: 10%;
}

@media screen and (min-width: 1000px) {
    .about_me {
        color: var(--v-anchor);
        font-size: 1.1em;
        row-gap: 35px;
    }

    .about_me_container {
        height: 100vh;
        background-color: var(--v-primary);
    }
}
</style>