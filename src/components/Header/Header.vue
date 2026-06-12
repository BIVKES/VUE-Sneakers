<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">
        <img src="/logo.png" alt="React Sneakers" />
        <div class="header__logo-text">
          <h3>Vue Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </router-link>

      <nav class="header__nav">
        <div class="nav-item" @click="$emit('toggle-drawer')">
          <img src="/cart.svg" alt="Cart" />
          <span>{{ totalPrice }} руб.</span>
          <span v-if="cartCount > 0" class="badge">{{ cartCount }}</span>
        </div>
        <router-link to="/favorites" class="nav-item" :class="{ active: $route.path === '/favorites' }">
          <img src="/heart.svg" alt="Favorites" />
          <span>Закладки</span>
        </router-link>
        <router-link to="/orders" class="nav-item" :class="{ active: $route.path === '/orders' }">
          <img src="/profile.svg" alt="Profile" />
          <span>Профиль</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    totalPrice: { type: Number, default: 0 },
    cartCount: { type: Number, default: 0 }
  },
  emits: ['toggle-drawer']
}
</script>

<style scoped lang="scss">
@use './Header.scss' as *;
</style>
