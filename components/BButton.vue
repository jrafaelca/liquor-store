<template>
  <component
    :is="tag"
    class="btn"
    :class="[
      { 'btn--primary' :  color === 'primary'},
      { 'btn--circular' :  circular}
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: null
    },
    circular: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>
.btn {
  @apply bg-gray-200;
}

.btn--primary {
  @apply bg-pink-600;
}

.btn--circular {
  @apply p-1.5 rounded-full;
}
</style>
