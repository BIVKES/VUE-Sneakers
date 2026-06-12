git add .<template>
  <div class="slider">
    <div class="slider__content">
      <div class="slider__text">
        <img class="slider__brand-logo" src="/sliderLogo.png" alt="brand-logo">
        <h2>
          <span class="green">Stan Smith,</span><br />
          Forever!
        </h2>
        <button class="buy-btn">КУПИТЬ</button>
      </div>
      <div class="slider__img">
        <img src="/slider.png" alt="Stan Smith Kermit" />
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'HeroSlider' }
</script>

<style scoped lang="scss">
@use './Slider.scss' as *;
</style>
