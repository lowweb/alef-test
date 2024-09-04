<script setup>
const model = defineModel({})
const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  }
})
</script>

<template>
  <label class="input" :class="{ 'input--disabled': disabled }">
    <span class="input__label"><slot></slot></span>
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-model="model"
      class="input__field"
    />
  </label>
</template>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--colors-grayl);
  background: var(--colors-white);
  border-radius: 4px;
  padding: 8px 16px 6px 8px;

  &--disabled {
    & .input__label {
      opacity: 0.24;
    }
  }

  &:hover {
    box-shadow:
      0 4px 56px 0 rgba(51, 51, 51, 0.16),
      0 4px 4px 0 rgba(51, 51, 51, 0.04);
    background: var(--colors-white);
  }

  &__label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-weight: 400;
    font-size: 13px;
    color: var(--colors-gray);
    font-family: inherit;
  }

  &__field {
    border: none;
    background: var(--colors-white);
    color: var(--colors-black);
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--colors-black);

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: var(--colors-gray);
    }

    &:disabled {
      opacity: 0.24;
      color: var(--colors-black);
    }

    &:read-only {
      color: var(--colors-black);
    }
  }
}
</style>
