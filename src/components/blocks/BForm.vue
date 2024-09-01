<template>
  <form class="form" @submit.prevent="">
    <slot></slot>
  </form>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  &__fieldset {
    margin-bottom: 44px;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
  &__button {
    align-self: flex-start;
  }
}
</style>
