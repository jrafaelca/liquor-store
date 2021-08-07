export const state = () => ({
  items: [
    {
      name: 'Store #1',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '23',
      },
      delivery: true,
      shipping_cost: 1000,
      shipping_time: 45,
    },
    {
      name: 'Store #2',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '12',
        to: '20',
      },
      delivery: true,
      shipping_cost: 2000,
      shipping_time: 10,
    },
    {
      name: 'Store #3',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '20',
      },
      delivery: true,
      shipping_cost: 4000,
      shipping_time: 45,
    },
    {
      name: 'Store #4',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '18',
      },
      delivery: true,
      shipping_cost: 3000,
      shipping_time: 14,
    },
    {
      name: 'Store #5',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '16',
      },
      delivery: true,
      shipping_cost: 1000,
      shipping_time: 35,
    },
    {
      name: 'Store #6',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '23',
      },
      delivery: true,
      shipping_cost: 2000,
      shipping_time: 14,
    },
    {
      name: 'Store #7',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '24',
      },
      delivery: true,
      shipping_cost: 8000,
      shipping_time: 28,
    },
    {
      name: 'Store #8',
      picture: 'https://www.lider.cl/catalogo/images/lider-fb.png',
      background: 'https://dilinor.cl/wp-content/uploads/2021/02/ac.jpg',
      schedule: {
        from: '10',
        to: '16',
      },
      delivery: true,
      shipping_cost: 5000,
      shipping_time: 22,
    },
  ],
})

export const getters = {
  items: (state) => state.items,
  featured: (state) => state.items.slice(0, 4),
}
