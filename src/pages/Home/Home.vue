<template>
  <div>
    <HeroSlider />

    <div class="search-block">
      <h1>Все кроссовки</h1>
      <div class="search-wrapper">
        <img src="/search.svg" alt="Search" class="search-icon" />
        <input type="text" placeholder="Поиск..." v-model="searchQuery" />
      </div>
    </div>

    <CardList
      :items="filteredItems"
      @toggle-favorite="$emit('toggle-favorite', $event)"
      @toggle-cart="$emit('toggle-cart', $event)"
    />
  </div>
</template>

<script>
import HeroSlider from '../../components/Slider/Slider.vue'
import CardList from '../../components/CardList/CardList.vue'

export default {
  name: 'HomePage',
  components: { HeroSlider, CardList },
  props: { items: Array },
  emits: ['toggle-favorite', 'toggle-cart'],
  data() { return { searchQuery: '' } },
  computed: {
    filteredItems() {
      if (!this.searchQuery) return this.items
      const query = this.searchQuery.toLowerCase()
      return this.items.filter(item => item.title.toLowerCase().includes(query))
    }
  }
}
</script>
