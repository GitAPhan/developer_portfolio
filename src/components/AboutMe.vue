<template>
    <div class="about_me_container">
        <section class="about_me">
            <h1>We immerse ourselves from the ROOTS to make every digital project happen from start to finish.</h1>
            <p>We put the people in the center of everything we do with one goal in mind: create value for our clients. Every project has specific needs, and we identify and adapt to them, guiding and collaborating with clients throughout the design process.</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'about-me',
}
</script>

<style lang="scss">
.about_me {
    display: grid;
    color: var(--v-primary);
    row-gap: 10px;
    font-size: .8em;
    max-width: 450px;
    >p:nth-child(2) {
        margin-bottom: 0px;
    }
}
.about_me_container {
    display: grid;
    place-items: center;
    background-color: var(--v-secondary);
    padding: 10%;
}
@media screen and (min-width: 1000px){
    .about_me {
        color: var(--v-secondary);
        font-size: 1.4em;
    }
    .about_me_container {
        height: 100vh;
        background-color: var(--v-primary);
    }
}
</style>