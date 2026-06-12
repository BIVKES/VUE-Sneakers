<template>
  <div>
    <div class="drawer-overlay" :class="{ visible: isOpen }" @click="$emit('close')"></div>
    <div class="drawer" :class="{ visible: isOpen }">
      <div class="drawer__header">
        <h2>Корзина</h2>
        <button class="close-btn" @click="$emit('close')">
          <img :src="close" alt="Close" />
        </button>
      </div>

      <div class="drawer__items">
        <!-- Пустая корзина -->
        <div v-if="items.length === 0 && !isOrderComplete" class="drawer__empty">
          <img :src="packageIcon" alt="Empty" />
          <h3>Корзина пустая</h3>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button class="back-btn" @click="$emit('close')">
            <img :src="arrowLeft" alt="Back" />
            Вернуться назад
          </button>
        </div>

        <!-- Заказ оформлен -->
        <div v-else-if="isOrderComplete" class="drawer__success">
          <img :src="orderSuccess" alt="Success" />
          <h3>Заказ оформлен!</h3>
          <p>Ваш заказ #{{ orderId }} скоро будет передан курьерской доставке</p>
          <button class="back-btn" @click="$emit('close')">
            <img :src="arrowLeft" alt="Back" />
            Вернуться назад
          </button>
        </div>

        <!-- Список товаров -->
        <div v-else v-for="item in items" :key="item.id" class="drawer__item">
          <img :src="item.imageUrl" :alt="item.title" class="drawer__item-img" />
          <div class="drawer__item-info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.price }} руб.</p>
          </div>
          <button class="remove-btn" @click="$emit('remove', item.id)">
            <img :src="close" alt="Remove" />
          </button>
        </div>
      </div>

      <!-- Футер -->
      <div v-if="items.length > 0 && !isOrderComplete" class="drawer__footer">
        <div class="total-row">
          <span>Итого:</span>
          <span>{{ totalPrice }} руб.</span>
        </div>
        <div class="total-row dashed">
          <span>Налог 5%:</span>
          <span>{{ tax }} руб.</span>
        </div>
        <button class="checkout-btn" @click="$emit('checkout')">
          Оформить заказ
          <img :src="arrowRight" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import close from '../../assets/icons/close.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import packageIcon from '../../assets/icons/package-icon.svg'
import orderSuccess from '../../assets/icons/order-success.png'

export default {
  name: 'CartDrawer',
  props: { isOpen: Boolean, items: Array, totalPrice: Number, isOrderComplete: Boolean, orderId: Number },
  emits: ['close', 'remove', 'checkout'],
  data() { 
    return { close, arrowRight, arrowLeft, packageIcon, orderSuccess } 
  },
  computed: {
    tax() { return Math.round(this.totalPrice * 0.05) }
  }
}
</script>

<style scoped lang="scss">
@use './Drawer.scss' as *;
</style>