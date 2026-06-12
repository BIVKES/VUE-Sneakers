<<template>
  <div>
    <div class="drawer-overlay" :class="{ visible: isOpen }" @click="$emit('close')"></div>
    <div class="drawer" :class="{ visible: isOpen }">
      <div class="drawer__header">
        <h2>Корзина</h2>
        <button class="close-btn" @click="$emit('close')">
          <img :src="close" alt="Close" />
        </button>
      </div>
      <!-- ... остальное ... -->
      <div v-if="items.length > 0 && !isOrderComplete" class="drawer__footer">
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

export default {
  name: 'CartDrawer',
  props: { isOpen: Boolean, items: Array, totalPrice: Number, isOrderComplete: Boolean, orderId: Number },
  emits: ['close', 'remove', 'checkout'],
  data() { return { close, arrowRight } },
  computed: {
    tax() { return Math.round(this.totalPrice * 0.05) }
  }
}
</script>

<style scoped lang="scss">
@use './Drawer.scss' as *;
</style>
