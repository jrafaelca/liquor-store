<template>
  <div class="input">
    <input
      class="input__element"
      v-bind="$attrs"
      v-on="$listeners">

    <div v-if="$slots.icon" class="input__icon">
      <slot name="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BInput'
}
</script>

<style scoped>
.input {
  @apply relative flex items-center pl-4 pr-3 py-2.5 bg-gray-100 rounded-full;
}

.input__element{
  @apply w-full text-sm font-semibold bg-transparent placeholder-gray-700 focus:outline-none;
}

.input__icon {
  @apply h-6 w-6;
}
</style>

