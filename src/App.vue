<script setup>
import BHeader from '@/components/blocks/BHeader.vue'
import BFooter from './components/blocks/BFooter.vue'
// import { useCompanyStore } from '@/stores/companyStore'
// const companyStore = useCompanyStore()
// companyStore.getHeaderInfo()
</script>

<template>
  <BHeader />
  <main class="page__main">
    <router-view v-slot="{ Component }">
      <keep-alive max="5">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
  <BFooter />
</template>

<style scoped lang="scss"></style>
