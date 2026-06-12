<<template>
  <div class="card">
    <button class="card__favorite" :class="{ liked: isFavorite }" @click.stop="toggleFavorite">
      <img :src="isFavorite ? heartLiked : heart" alt="Favorite" />
    </button>
    <img :src="imageUrl" :alt="title" class="card__img" />
    <h4 class="card__title">{{ title }}</h4>
    <div class="card__footer">
      <div class="card__price">
        <div class="card__price-label">Цена:</div>
        <div class="card__price-value">{{ price }} руб.</div>
      </div>
      <button class="card__add" :class="{ added: isAdded }" @click.stop="toggleCart">
        <img v-if="isAdded" :src="checked" alt="Added" />
        <img v-else :src="plus" alt="Add" />
      </button>
    </div>
  </div>
</template>

<script>
import heart from '../../assets/icons/heart.svg'
import heartLiked from '../../assets/icons/heart-liked.svg'
import plus from '../../assets/icons/plus.svg'
import checked from '../../assets/icons/checked.svg'

export default {
  name: 'CardItem',
  props: { id: Number, title: String, price: Number, imageUrl: String, isFavorite: Boolean, isAdded: Boolean },
  emits: ['toggle-favorite', 'toggle-cart'],
  data() { return { heart, heartLiked, plus, checked } },
  methods: {
    toggleFavorite() { this.$emit('toggle-favorite', this.id) },
    toggleCart() { this.$emit('toggle-cart', this.id) }
  }
}
</script>

<style scoped lang="scss">
@use './Card.scss' as *;
</style>
