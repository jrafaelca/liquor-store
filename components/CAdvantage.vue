<template>
  <div class="advantage">
    <div class="advantage__item">
      <img
        src="~/static/hasta-tu-puerta.png"
        alt="Hasta tu puerta"
        class="advantage__picture"
      />
      <div class="advantage__title">
        Hasta tu puerta
      </div>
    </div>
    <div class="advantage__item">
      <img
        src="~/static/encontraras-de-todo.png"
        alt="Encontrarás todo"
        class="advantage__picture"
      />
      <div class="advantage__title">
        Encontrarás todo
      </div>
    </div>
    <div class="advantage__item">
      <img
        src="~/static/atencion-24-7.png"
        alt="Atención 24/7"
        class="advantage__picture"
      />
      <div class="advantage__title">
        Atención 24/7
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAdvantage'
}
</script>

<style scoped>
.advantage {
  @apply flex space-x-3;
}

.advantage__item {
  @apply flex flex-col lg:flex-row items-center justify-center;
}

.advantage__picture {
  @apply h-24 lg:h-32 w-24 lg:w-32 rounded-full;
}

.advantage__title {
  @apply font-display text-xs lg:text-sm text-center lg:text-left tracking-wide uppercase;
}
</style>
