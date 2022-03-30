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

<style lang="scss">
.tools_n_tech {
    position: relative;
    top: 61vh;
    left: 18%;
    max-width: 76vw;
    color: #ffffff;
    font-size: clamp(13.2px, min(3.55vw, 3.55vh), 15px);
    > p {
        margin: 0;
    }
}
</style>