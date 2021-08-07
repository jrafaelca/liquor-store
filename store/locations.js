export const state = () => ({
  items: [
    {
      name: 'Maipú',
      shipping_time: 25,
    },
    {
      name: 'La Florida',
      shipping_time: 25,
    },
    {
      name: 'Peñalolén',
      shipping_time: 25,
    },
    {
      name: 'Las Condes',
      shipping_time: 25,
    },
    {
      name: 'Lo Barnechea',
      shipping_time: 25,
    },
  ],
})

export const getters = {
  items: (state) => state.items,
}
