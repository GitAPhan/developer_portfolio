<template>
    <div class="tools_n_tech">
        <h1>Tools & Technologies</h1>
        <p>HTML5, CSS, SASS, Javascript, VueJS</p>
        <p>Bash, Git, Google Cloud Services, Figma, Postman</p>
        <p>SQL Databases (MariaDB), Database Tools(DBeaver)</p>
        <p>Python, Flask, Rest API, Apache</p>
        <p>Linux, Windows</p>
    </div>
</template>

<script>
export default {
    name: 'tools-tech'
}
</script>

<style lang="scss" scoped>
.tools_n_tech {
    position: sticky;
    top: 61vh;
    // transform: translateY(-50vh);

    // position: relative;
    // top: 61vh;
    // left: min(18%, 75px);
    max-width: 76vw;
    color: var(--v-text);
    font-size: clamp(13.2px, min(3.55vw, 3.55vh), 14.5px);
    > p {
        margin: 0;
        color: var(--v-anchor);
    }
}
@media screen and (min-width: 1000px) {
    .tools_n_tech {
        transform: translateX(min(15%, 150px));
    }
}
</style>