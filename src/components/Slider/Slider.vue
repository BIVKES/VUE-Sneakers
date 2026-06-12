<<template>
  <div class="slider">
    <div class="slider__content">
      <div class="slider__text">
        <img class="slider__brand-logo" :src="sliderLogo" alt="brand-logo">
        <h2>
          <span class="green">Stan Smith,</span><br />
          Forever!
        </h2>
        <button class="buy-btn">КУПИТЬ</button>
      </div>
      <div class="slider__img">
        <img :src="slider" alt="Stan Smith Kermit" />
      </div>
    </div>
  </div>
</template>

<script>
import sliderLogo from '../../assets/icons/sliderLogo.png'
import slider from '../../assets/icons/slider.png'

export default {
  name: 'HeroSlider',
  data() { return { sliderLogo, slider } }
}
</script>

<style scoped lang="scss">
@use './Slider.scss' as *;
</style>
