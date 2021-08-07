<template>
  <div
    class="sub-header"
    :class="[
      { 'sub-header--semibold' : !light},
      { 'sub-header--light' : light}
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BSubHeader',
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.sub-header {
  @apply mb-2 text-xs;
}

.sub-header--semibold {
  @apply font-semibold;
}

.sub-header--light {
  @apply font-light;
}
</style>
