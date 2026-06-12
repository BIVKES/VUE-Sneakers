<template>
  <div class="info-block">
    <img :src="image" alt="" class="info-block__img" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button class="back-btn" @click="$emit('click')">
      <img src="/vue-sneakers/arrow-left.svg" alt="Back" />
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
  props: {
    title: String,
    description: String,
    image: String,
    buttonText: String
  },
  emits: ['click']
}
</script>

<style scoped lang="scss">
@use './Info.scss' as *;
</style>
