<template>
    <div class="about_me_container">
        <section class="about_me">
            <figure>
                <h1>"Take risks now and do something bold. You won't regret it"</h1>
                <figcaption>- Elon Musk</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam velit tenetur magni voluptates
                repellat eum molestias, placeat, officiis commodi et neque consectetur, libero fugit possimus
                perferendis tempore ipsa laudantium.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam debitis aliquam incidunt vel
                soluta fugiat, hic totam minus natus facilis error quaerat quam, placeat tempora! A et molestias saepe.
            </p>
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