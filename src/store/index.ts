import { createStore, createLogger } from 'vuex'
import base from './base'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    [base.name]: base.module
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store