<<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">
        <img :src="logo" alt="React Sneakers" />
        <div class="header__logo-text">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </router-link>

      <nav class="header__nav">
        <div class="nav-item" @click="$emit('toggle-drawer')">
          <img :src="cart" alt="Cart" />
          <span>{{ totalPrice }} руб.</span>
          <span v-if="cartCount > 0" class="badge">{{ cartCount }}</span>
        </div>
        <router-link to="/favorites" class="nav-item" :class="{ active: $route.path === '/favorites' }">
          <img :src="heart" alt="Favorites" />
          <span>Закладки</span>
        </router-link>
        <router-link to="/orders" class="nav-item" :class="{ active: $route.path === '/orders' }">
          <img :src="profile" alt="Profile" />
          <span>Профиль</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '../../assets/icons/logo.png'
import cart from '../../assets/icons/cart.svg'
import heart from '../../assets/icons/heart.svg'
import profile from '../../assets/icons/profile.svg'

export default {
  name: 'AppHeader',
  props: {
    totalPrice: { type: Number, default: 0 },
    cartCount: { type: Number, default: 0 }
  },
  emits: ['toggle-drawer'],
  data() {
    return { logo, cart, heart, profile }
  }
}
</script>

<style scoped lang="scss">
@use './Header.scss' as *;
</style>
