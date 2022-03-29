<template>
    <div class="main_right">
        <tools-tech />
    </div>
</template>

<script>
import ToolsTech from './ToolsTech.vue'
export default {
  components: { ToolsTech },
    name: 'logo-right',
}
</script>

<style>
.main_right {
    background-image: url('../assets/logo_right.png');
    background-position: left;
}
</style>