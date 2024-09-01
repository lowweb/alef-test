<script setup></script>
<template>
  <fieldset class="fieldset">
    <legend class="fieldset__legend"><slot name="legend"></slot></legend>

    <slot name="fieldset"></slot>
  </fieldset>
</template>

<style lang="scss">
.fieldset {
  display: flex;
  flex-direction: column;
  border: none;
  row-gap: 10px;

  &__legend {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--colors-black);
    margin-bottom: 20px;
  }
}
</style>
