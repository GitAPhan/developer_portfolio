<template>
    <div class="more_me_container">
        <section class="more_me">
            <figure v-if="$mq === 'lg'" class="more_me_quote">
                <h1>"Technology is a word that describes something that doesn't work"</h1>
                <figcaption>- Douglas Adams</figcaption>
            </figure>
            <p>We immerse ourselves from the ROOTS to make every digital project happen from start to finish.</p>
            <p>We put the people in the center of everything we do with one goal in mind: create value for our clients. Every project has specific needs, and we identify and adapt to them, guiding and collaborating with clients throughout the design process.</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'more-me',
}
</script>

<style lang="scss">
.more_me {
    display: grid;
    color: var(--v-primary);
    row-gap: 20px;
    font-size: 0.8em;
    max-width: 450px;
    > p:nth-child(2) {
        margin-bottom: 0px;
    }
}
.more_me_container {
    display: grid;
    place-items: center;
    background-color: var(--v-secondary);
    padding: 10%;
}
@media screen and (min-width: 1000px) {
    .more_me {
        color: var(--v-text);
        font-size: 1.3em;
        max-width: 650px;
        >p {
            color: var(--v-anchor);
        }
    }
    .more_me_container {
        background-color: var(--v-primary);
    }
}
</style>