<template>
  <div
    class="header"
    :class="[{'header--sm' : sm}]"
    v-bind="$attrs"
  >
    <div v-if="$slots.icon || $slots.avatar">
      <slot v-if="$slots.icon" name="icon" />
      <slot v-if="$slots.avatar" name="avatar" />
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BHeader',
  props: {
    sm: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.header {
  @apply flex items-center space-x-2 font-semibold;
}

.header--sm {
  @apply text-sm;
}
</style>
