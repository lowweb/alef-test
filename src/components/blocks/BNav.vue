<script setup></script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <router-link to="/" class="menu__link">Форма</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/preview" class="menu__link"> Превью </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  &__list {
    display: flex;
    list-style: none;
    gap: 24px;
  }

  &__link {
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: var(--colors-gray);
    &:hover {
      box-shadow: inset 0 -2px 0 0 #868686;
      background: var(--colors-white);
    }
  }
}
.router-link-active {
  box-shadow: inset 0 -2px 0 0 var(--colors-primary);
  background: var(--colors-white);
}
</style>
