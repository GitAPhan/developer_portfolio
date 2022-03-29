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

<style>
.about_me {
    display: grid;
    color: #464545;
    width: 80%;
    height: 100%;
    row-gap: 10px;
}
.about_me_container {
    display: grid;
    place-items: center;
    background-color: #c4c4c4;
    padding: 10%;
}
</style>