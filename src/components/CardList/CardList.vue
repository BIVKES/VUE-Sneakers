<template>
  <div class="card-list">
    <CardItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @toggle-favorite="$emit('toggle-favorite', $event)"
      @toggle-cart="$emit('toggle-cart', $event)"
    />
  </div>
</template>

<script>
import CardItem from '../Card/Card.vue'

export default {
  name: 'CardList',
  components: { CardItem },
  props: { items: { type: Array, default: () => [] } },
  emits: ['toggle-favorite', 'toggle-cart']
}
</script>

<style scoped lang="scss">
@use './CardList.scss' as *;
</style>
