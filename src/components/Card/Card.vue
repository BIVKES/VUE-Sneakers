<template>
  <div class="card">
    <button 
      class="card__favorite" 
      :class="{ liked: isFavorite }"
      @click.stop="toggleFavorite"
    >
      <img :src="isFavorite ? '/heart-liked.svg' : '/heart.svg'" alt="Favorite" />
    </button>

    <img :src="imageUrl" :alt="title" class="card__img" />

    <h4 class="card__title">{{ title }}</h4>

    <div class="card__footer">
      <div class="card__price">
        <div class="card__price-label">Цена:</div>
        <div class="card__price-value">{{ price }} руб.</div>
      </div>
      <button 
        class="card__add" 
        :class="{ added: isAdded }"
        @click.stop="toggleCart"
      >
        <img v-if="isAdded" src="/checked.svg" alt="Added" />
        <img v-else src="/plus.svg" alt="Add" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    id: Number,
    title: String,
    price: Number,
    imageUrl: String,
    isFavorite: Boolean,
    isAdded: Boolean
  },
  emits: ['toggle-favorite', 'toggle-cart'],
  methods: {
    toggleFavorite() { this.$emit('toggle-favorite', this.id) },
    toggleCart() { this.$emit('toggle-cart', this.id) }
  }
}
</script>

<style scoped lang="scss">
@use './Card.scss' as *;
</style>
