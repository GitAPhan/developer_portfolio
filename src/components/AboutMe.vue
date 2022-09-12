<template>
  <div class="about_me_container" id="about_me_container">
    <section class="about_me">
      <!-- <figure>
                <h1>"Take risks now and do something bold. You won't regret it"</h1>
                <figcaption>- Elon Musk</figcaption>
            </figure> -->
      <p>I'm a recent graduate of Innotech College from their Full-Stack Development Diploma program. Thanks to them, I got a taste of what the development world looks like and I was
        absolutely hooked!</p>
      <p>
        Since graduating from a coding bootcamp and receiving my Full-Stack
          Development Diploma. I have played around with building different
          applications using JavaScript, VueJS, Python, Flask and MySQL just to
          name a few.
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
  font-size: 0.8em;
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
  padding: 10%;
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