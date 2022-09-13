<template>
  <div class="about_me_container" id="about_me_container">
    <section class="about_me">
      <p>
        A multi-talented human with experiences gathered from a wide range of
        industries. You can call me a designer, an entrepreneur, an advisor, a
        developer, and much much more. Although, at the end of day, I like to
        think of myself as a problem solver.
      </p>
      <p>
        Fueled by my ever expanding curiosity and passionate persistence, I'm
        easily inspired and more than willing to follow my fascinations wherever
        they may take me. I am enthusiastic, expressive, and never satified to
        just come up with ideas. Usually giving into my impulsive needs to act
        upon them.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "about-me",
};
</script>

<style lang="scss" scoped>
.about_me {
  display: grid;
  color: var(--v-primary);
  row-gap: 10px;
  font-size: 0.9em;
  max-width: 450px;

  > p:nth-child(2) {
    margin-bottom: 0px;
    color: var(--v-anchor);
  }
}

.about_me_container {
  display: grid;
  place-items: center;
  background-color: var(--v-secondary);
  padding: 5% 10%;
}

@media screen and (min-width: 1000px) {
  .about_me {
    color: var(--v-anchor);
    font-size: 1.1em;
    row-gap: 35px;
  }

  .about_me_container {
    max-height: min(900px, 100vh);
    height: 100%;
    background-color: var(--v-primary);
  }
}
</style>120