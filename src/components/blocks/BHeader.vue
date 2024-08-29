<script setup>
import ILogo from '../icons/ILogo.vue'
import BNav from '../blocks/BNav.vue'
</script>

<template>
  <header class="header">
    <ILogo />
    <BNav class="header__menu" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 22px 51px;
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.1);
  background: var(--colors-white);
  display: flex;
  align-items: center;

  &__menu {
    margin: auto;
  }
}
</style>
