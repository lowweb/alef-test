<script setup>
const props = defineProps({})
const backgroundColor = `var(${props.color})`
</script>

<template>
  <button class="button">
    <span v-if="$slots.iconButton" class="button__icon">
      <slot name="iconButton" />
    </span>

    <slot name="textButton"></slot>
  </button>
</template>

<style lang="scss">
.button {
  border: 2px solid var(--colors-primary);
  border-radius: 100px;
  padding: 8px 18px;
  text-align: center;
  color: var(--color-light-black);
  text-wrap: nowrap;
  display: inline-flex;
  justify-content: center;
  background-color: var(--color-white);
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--colors-primary);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.56;

    &:hover {
      background: inherit;
    }
  }

  &:hover {
    background: rgba(110, 65, 226, 0.04);
  }
  &__icon {
    margin-right: 4px;
    display: flex;
  }

  &--primary {
    background-color: var(--colors-primary);
    color: var(--colors-white);

    &:disabled {
      background-color: var(--colors-primary-disabled);
      border-color: var(--colors-primary-disabled);
      cursor: not-allowed;

      &:hover {
        border-color: var(--colors-primary-disabled);
        background-color: var(--colors-primary-disabled);
      }
    }

    &:hover {
      background-color: var(--colors-primary-hover);
      border: 2px solid var(--colors-primary-hover);
    }
  }
  &--flat {
    background-color: var(--colors-white);
    color: var(--colors-primary);
    border-radius: 4px;
    border: 2px solid var(--colors-white);

    &:disabled {
      opacity: 0.56;
      cursor: not-allowed;

      &:hover {
        // opacity: 0.56;
      }
    }

    &:hover {
      background-color: rgba(110, 65, 226, 0.04);
      border: 2px solid rgba(110, 65, 226, 0);
    }
  }
}
</style>
