<template>
  <div class="about">{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'About',
  setup: () => {
    const msg = ref('疏影横斜水清浅 暗香浮动月黄昏')
    return { msg }
  }
})
</script>

<style lang="scss" scoped></style>
