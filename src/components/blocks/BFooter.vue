<template>
  <footer class="footer">
    <p class="footer__copy">all rights reserved</p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.1);
  background: var(--colors-graym);
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__copy {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    color: #000;
  }
}
</style>
