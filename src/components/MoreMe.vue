<template>
  <div class="more_me_container">
    <section class="more_me">
      <p>
        I have always believed that skills are taught and personality is
        inherited. Armed with this belief, I strive to better myself by
        continually learning, consistently challenging myself, and doing
        interesting things that matter.
      </p>
      <p>
        My abundant energy fuels me in the pursuit of many interests, hobbies,
        areas of study, and artistic endeavors. I am a fast learner, able to
        pick-up new skills, and juggle different projects with relative ease.
      </p>
      <p>Please feel free to contact me!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "more-me",
};
</script>

<style lang="scss" scoped>
.more_me {
  display: grid;
  color: var(--v-primary);
  row-gap: 10px;
  font-size: 0.9em;
  max-width: 450px;
  > p:nth-child(2) {
    color: var(--v-anchor);
  }
  > p:nth-child(3) {
  margin-bottom: 0px;
  }
}

.more_me_container {
  display: grid;
  place-items: center;
  background-color: var(--v-secondary);
  padding: 5% 10%;
  height: 100%;
}

@media screen and (min-width: 1000px) {
  .more_me {
    color: var(--v-text);
    font-size: 1.1em;
    row-gap: 20px;

    > p {
      color: var(--v-anchor);
    }
  }

  .more_me_container {
    background-color: var(--v-primary);
    padding: 0;
  }
}
</style>