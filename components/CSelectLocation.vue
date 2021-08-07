<template>
  <div class="select-location" @click="open = !open">
    <div
      class="select-location__button transition duration-400 ease-out"
      :class="[{ 'bg-gray-200' : open }]"
    >
      <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32">
        <path fill="currentColor"
              d="M16.187 12.578a1.28 1.28 0 00-1.087-.6h-1.394V5.073a.647.647 0 00-1.232-.277l-3.74 7.888A1.287 1.287 0 009.9 14.521h1.391v6.906a.647.647 0 001.232.278l3.74-7.888a1.279 1.279 0 00-.075-1.239m-3.482-5.906v5.307h-.1a1.316 1.316 0 00-1.314 1.314v.222H9.9a.28.28 0 01-.253-.4zm-.405 6.844v-.222a.308.308 0 01.307-.307h.1v.222a.307.307 0 01-.307.307zm3.056-.129l-3.056 6.443v-5.309h.1a1.316 1.316 0 001.305-1.313v-.222h1.391a.28.28 0 01.253.4" />
        <path fill="currentColor"
              d="M12.5 0C5.257 0 0 5.809 0 13.812c0 7.24 9.325 17.659 12.5 17.659S25 21.052 25 13.812C25 5.809 19.743 0 12.5 0zm10.179 13.812c0 2.725-1.6 6.371-4.389 10-2.606 3.393-5.037 5.2-5.79 5.2s-3.184-1.805-5.794-5.198c-2.789-3.631-4.389-7.276-4.389-10 0-6.579 4.281-11.355 10.179-11.355s10.183 4.774 10.183 11.353z" />
      </svg>

      <div>Selecciona tu comuna</div>

      <svg v-if="!open" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>

      <svg v-if="open" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </div>

    <div
      class="select-location__dropdown h-0  transition-height duration-100 ease-out"
      :class="[
      {'h-36' : open}
    ]">
      <ul class="text-center">
        <li
          v-for="(location, index) in locations"
          :key="index"
          class=" mb-1.5"
        >
          <span class="font-semibold">{{ location.name }}:</span> {{ location.shipping_time }} Minutos
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CSelectLocation',
  data() {
    return {
      open: false
    }
  },
  computed: {
    ...mapGetters({
      locations: 'locations/items'
    })
  }
}
</script>

<style scoped>
.select-location {
  @apply relative;
}

.select-location__button {
  @apply flex justify-center items-center space-x-2 text-sm px-4 py-2 rounded-md;
}

.select-location__dropdown {
  @apply absolute w-full text-sm px-6 bg-gray-200 overflow-hidden rounded-b-lg z-30;
}
</style>
