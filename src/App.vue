<template>
  <div class="app">
    <div class="container">
      <div class="content">
        <AppHeader
          :total-price="totalPrice"
          :cart-count="cartItems.length"
          @toggle-drawer="isDrawerOpen = true"
        />
        <router-view
          :items="items"
          @toggle-favorite="toggleFavorite"
          @toggle-cart="toggleCart"
          @remove-order="removeFromOrders"
        />
      </div>
    </div>

    <CartDrawer
      :is-open="isDrawerOpen"
      :items="cartItems"
      :total-price="totalPrice"
      :is-order-complete="isOrderComplete"
      :order-id="orderId"
      @close="closeDrawer"
      @remove="removeFromCart"
      @checkout="checkout"
    />
  </div>
</template>

<script>
import AppHeader from './components/Header/Header.vue'
import CartDrawer from './components/Drawer/Drawer.vue'

export default {
  name: 'App',
  components: { AppHeader, CartDrawer },
  data() {
  return {
    isDrawerOpen: false,
    isOrderComplete: false,
    orderId: null,
    items: this.loadFromStorage() || [
      { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/sneakers/sneakers-10.jpg', isFavorite: false, isAdded: false, isOrdered: false },
    ]
  }
},
  computed: {
    cartItems() {
      return this.items.filter(item => item.isAdded)
    },
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0)
    }
  },
  methods: {
  saveToStorage() {
    const data = this.items.map(item => ({
      id: item.id,
      isFavorite: item.isFavorite,
      isAdded: item.isAdded,
      isOrdered: item.isOrdered
    }))
    localStorage.setItem('sneakers_data', JSON.stringify(data))
  },
  
  loadFromStorage() {
    const saved = localStorage.getItem('sneakers_data')
    if (!saved) return null
    
    const data = JSON.parse(saved)
    const baseItems = [
  { id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: './sneakers/sneakers-10.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 2, title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: './sneakers/sneakers-2.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: './sneakers/sneakers-11.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: './sneakers/sneakers-4.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 5, title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: './sneakers/sneakers-9.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 6, title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: './sneakers/sneakers-8.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 7, title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: './sneakers/sneakers-7.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 8, title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: './sneakers/sneakers-5.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 9, title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: './sneakers/sneakers-1.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 10, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: './sneakers/sneakers-12.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 11, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: './sneakers/sneakers-3.jpg', isFavorite: false, isAdded: false, isOrdered: false },
  { id: 12, title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imageUrl: './sneakers/sneakers-6.jpg', isFavorite: false, isAdded: false, isOrdered: false },
]
    
    return baseItems.map(base => {
      const savedItem = data.find(s => s.id === base.id)
      return {
        ...base,
        isFavorite: savedItem ? savedItem.isFavorite : false,
        isAdded: savedItem ? savedItem.isAdded : false,
        isOrdered: savedItem ? savedItem.isOrdered : false
      }
    })
  },

  toggleFavorite(id) {
    const item = this.items.find(i => i.id === id)
    if (item) {
      item.isFavorite = !item.isFavorite
      this.saveToStorage()
    }
  },
  
  toggleCart(id) {
    const item = this.items.find(i => i.id === id)
    if (item) {
      item.isAdded = !item.isAdded
      this.saveToStorage()
    }
  },
  
  removeFromCart(id) {
    const item = this.items.find(i => i.id === id)
    if (item) {
      item.isAdded = false
      this.saveToStorage()
    }
  },
  
  checkout() {
    this.orderId = Math.floor(Math.random() * 100) + 1
    this.isOrderComplete = true
    this.cartItems.forEach(item => {
      item.isOrdered = true
      item.isAdded = false
    })
    this.saveToStorage()
  },
  
  closeDrawer() {
    this.isDrawerOpen = false
    this.isOrderComplete = false
  },
  removeFromOrders(id) {
    const item = this.items.find(i => i.id === id)
    if (item) {
      item.isOrdered = false
      this.saveToStorage()
    }
  }
 }
}
</script>

<style lang="scss">
  @use './styles/index' as *;
  @use './styles/main' as *;
</style>
