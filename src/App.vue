<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ThemeSetting } from './hooks/ThemeSetting'
import { ColorStyle } from './hooks/ColorStyle'

export default defineComponent({
  name: 'App',
    setup() {
    const store = useStore()
    const router = useRouter()
    store.dispatch('base/getMenu').then(() => {
      const path = location.hash.split('#')
      router.replace(path[1])
    })
    // 主题相关设置
    ThemeSetting()
    const { changeColor } = ColorStyle(store)
    nextTick(() => {
      changeColor()
    })
  },
})
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
