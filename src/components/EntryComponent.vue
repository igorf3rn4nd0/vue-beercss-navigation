<template>
  <a :class="props.active ? 'active' : ''" :to="props.path">
    <i>{{ props.icon }}</i>
    <span>{{ props.label }}</span>
  </a>
</template>
<script setup>
const props = defineProps({
  path: String,
  icon: String,
  label: String
})
</script>
