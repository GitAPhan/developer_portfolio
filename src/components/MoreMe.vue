<template>
  <div class="more_me_container">
    <section class="more_me">
      <!-- <figure v-if="$mq === 'lg'" class="more_me_quote">
                <h1>“Once a new technology rolls over you, if you're not part of the steamroller, you're part of the
                    road.”</h1>
                <figcaption>- Stewart Brand, Writer</figcaption>
            </figure> -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad
        omnis cum tempora repellat non blanditiis?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eum
        consequuntur pariatur tempore quidem provident molestias magni.
        Repellendus nesciunt tempora eum quidem natus ipsa totam? Non nobis
        autem voluptates nostrum!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "more-me",
};
</script>

<style lang="scss">
.more_me {
  display: grid;
  color: var(--v-primary);
  row-gap: 20px;
  font-size: 0.8em;
  max-width: 450px;

  > p:nth-child(2) {
    margin-bottom: 0px;
  }
}

.more_me_container {
  display: grid;
  place-items: center;
  background-color: var(--v-secondary);
  padding: 10%;
  height: 100%;
}

@media screen and (min-width: 1000px) {
  .more_me {
    color: var(--v-text);
    font-size: 1.3em;
    // max-width: 650px;
    // row-gap: 35px;

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