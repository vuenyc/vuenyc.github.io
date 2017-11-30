<template>
  <a class="Icon" :href="href">
    <slot/>
  </a>
</template>

<script>
export default {
  props: ['href']
}
</script>


<style scoped>
  svg:hover {
    transition: fill 0.5s ease;
  }

  svg {
    transition: fill 0.5s ease;
    height: 40px;
    fill: #b9babd;
  }
</style>

