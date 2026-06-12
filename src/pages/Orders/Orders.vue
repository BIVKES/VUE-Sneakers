<template>
  <div>
    <h1 class="page-title">
      <router-link to="/" class="page-title__back">
        <img src="/vue-sneakers/arrow-left.svg" alt="Back" />
      </router-link>
      Мои покупки
    </h1>

    <div v-if="orderItems.length > 0" class="orders">
      <div class="orders__list">
        <div 
          v-for="item in orderItems" 
          :key="item.id" 
          class="orders__item order-card"
        >
          <img 
            :src="item.imageUrl" 
            :alt="item.title" 
            class="order-card__img" 
          />
          <h4 class="order-card__title">{{ item.title }}</h4>
          <div class="order-card__footer">
            <div class="order-card__price">
              <div class="order-card__price-label">Цена:</div>
              <div class="order-card__price-value">{{ item.price }} руб.</div>
            </div>
            <button 
              class="order-card__remove" 
              @click="$emit('remove-order', item.id)"
            >
              <img src="/vue-sneakers/close.svg" alt="Remove" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <InfoBlock
      v-else
      title="У вас нет заказов"
      description="Вы нищеброд? Оформите хотя бы один заказ. И Юра устроит меня на работу."
      image="/emoji-1.png"
      buttonText="Вернуться назад"
      @click="$router.push('/')"
    />
  </div>
</template>

<script>
import InfoBlock from '../../components/Info/Info.vue'

export default {
  name: 'OrdersPage',
  components: { InfoBlock },
  props: { items: Array },
  emits: ['toggle-favorite', 'toggle-cart', 'remove-order'],
  computed: {
    orderItems() {
      return this.items.filter(item => item.isOrdered)
    }
  }
}
</script>

<style scoped lang="scss">
  @use './Orders.scss' as *;
</style>