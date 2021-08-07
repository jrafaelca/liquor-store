<template>
  <div class="card">
    <div
      v-if="$slots.header"
      class="card-header"
      :style="{ backgroundImage: `url(${background})`}"
    >
      <div class="card-header__overlay"></div>
      <div class="card-header__container">
        <slot name="header" />
      </div>
    </div>

    <div class="card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BCard',
  props: {
    background: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  @apply w-full shadow-lg rounded-xl overflow-hidden;
}

.card-header {
  @apply relative h-24 p-3 text-white bg-gray-200 bg-cover;
}

.card-header__overlay {
  @apply absolute h-full w-full inset-0 bg-gradient-to-t from-black via-transparent z-0;
}

.card-header__container {
  @apply relative h-full w-full z-10;
}

.card__body {
  @apply px-3 py-4;
}

.card__footer {
  @apply px-3 py-2 bg-pink-600 text-white;
}
</style>
