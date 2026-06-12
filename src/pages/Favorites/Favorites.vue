<template>
  <div>
    <h1 class="page-title">
      <router-link to="/" class="back-btn">
        <img src="/vue-sneakers/heart-liked.svg" alt="Back" />
      </router-link>
      Мои закладки
    </h1>

    <div v-if="favoriteItems.length > 0">
      <CardList
        :items="favoriteItems"
        @toggle-favorite="$emit('toggle-favorite', $event)"
        @toggle-cart="$emit('toggle-cart', $event)"
      />
    </div>

    <InfoBlock
      v-else
      title="Закладок нет :("
      description="Вы ничего не добавляли в закладки"
      image="/emoji-2.png"
      buttonText="Вернуться назад"
      @click="$router.push('/')"
    />
  </div>
</template>

<script>
import CardList from '../../components/CardList/CardList.vue'
import InfoBlock from '../../components/Info/Info.vue'

export default {
  name: 'FavoritesPage',
  components: { CardList, InfoBlock },
  props: { items: Array },
  emits: ['toggle-favorite', 'toggle-cart'],
  computed: {
    favoriteItems() {
      return this.items.filter(item => item.isFavorite)
    }
  }
}
</script>
