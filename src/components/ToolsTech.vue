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
    name: 'tools-tech',
}
</script> 

<style lang="scss" scoped>
.tools_n_tech {
    position: relative;
    > p {
        margin: 0;
        color: var(--v-anchor);
    }
}
@media screen and (max-width: 1000px) {
    .tools_n_tech {
        top: 61vh;
        max-width: 76vw;
        left: min(18%, 75px);
        font-size: clamp(13.2px, min(3.55vw, 3.55vh), 14.5px);
    }
}
</style>