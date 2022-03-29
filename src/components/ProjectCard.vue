<template>
    <div>
        <h2>{{project.name}}</h2>
        <h4>{{project.tech}}</h4>
        <h6>{{project.description}}</h6>
        <img src="" :alt="project.screenshot">
    </div>
</template>

<script>
    export default {
        name: 'project-card',
        props: {
            project: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style>
img {
    width: 300px;
    height: 100px;
}

</style>