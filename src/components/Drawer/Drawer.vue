<template>
  <div>
    <div class="drawer-overlay" :class="{ visible: isOpen }" @click="$emit('close')"></div>
    <div class="drawer" :class="{ visible: isOpen }">
      <div class="drawer__header">
        <h2>Корзина</h2>
        <button class="close-btn" @click="$emit('close')">
          <img src="/vue-sneakers/close.svg" alt="Close" />
        </button>
      </div>

      <div v-if="items.length === 0 && !isOrderComplete" class="drawer__items">
        <InfoBlock
          title="Корзина пустая"
          description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          image="/package-icon.png"
          buttonText="Вернуться назад"
          @click="$emit('close')"
        />
      </div>

      <div v-else-if="isOrderComplete" class="drawer__items">
        <InfoBlock
          title="Заказ оформлен!"
          :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
          image="/order-success.png"
          buttonText="Вернуться назад"
          @click="$emit('close')"
        />
      </div>

      <div v-else class="drawer__items">
        <div v-for="item in items" :key="item.id" class="drawer__item">
          <img :src="item.imageUrl" :alt="item.title" class="drawer__item-img" />
          <div class="drawer__item-info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.price }} руб.</p>
          </div>
          <button class="remove-btn" @click="$emit('remove', item.id)">
            <img src="/vue-sneakers/close.svg" alt="Remove" />
          </button>
        </div>
      </div>

      <div v-if="items.length > 0 && !isOrderComplete" class="drawer__footer">
        <div class="total-row dashed">
          <span>Итого:</span>
          <span>{{ totalPrice }} руб.</span>
        </div>
        <div class="total-row dashed">
          <span>Налог 5%:</span>
          <span>{{ tax }} руб.</span>
        </div>
        <button class="checkout-btn" @click="$emit('checkout')">
          Оформить заказ
          <img src="/vue-sneakers/arrow-right.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from '../Info/Info.vue'

export default {
  name: 'CartDrawer',
  components: { InfoBlock },
  props: {
    isOpen: Boolean,
    items: Array,
    totalPrice: Number,
    isOrderComplete: Boolean,
    orderId: Number
  },
  emits: ['close', 'remove', 'checkout'],
  computed: {
    tax() { return Math.round(this.totalPrice * 0.05) }
  }
}
</script>

<style scoped lang="scss">
@use './Drawer.scss' as *;
</style>
