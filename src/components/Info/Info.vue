<<template>
  <div class="info-block">
    <img :src="image" alt="" class="info-block__img" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button class="back-btn" @click="$emit('click')">
      <img :src="arrowLeft" alt="Back" />
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import arrowLeft from '../../assets/icons/arrow-left.svg'

export default {
  name: 'InfoBlock',
  props: { title: String, description: String, image: String, buttonText: String },
  emits: ['click'],
  data() { return { arrowLeft } }
}
</script>

<style scoped lang="scss">
@use './Info.scss' as *;
</style>
