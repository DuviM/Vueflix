import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state : () => ({ cart: []}),
  getters : {
    total : (state) => state.cart.length,
    has : (state) => {
      return(movie) => {
        return state.cart.find(item => item.movie.id === movie.id)
      }
    }
  },
  actions : {
    add (movie) {
      this.cart.push({movie, quantity: 1})
    },
    delete (movie) {
      const item = this.cart.find((item) => {
        return item.movie.id === movie.id
      })
      this.cart.splice(this.cart.indexOf(item), 1)
    },
    clearCart () {
      this.cart = ['']
    }
  },
});