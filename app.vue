<template>
  <div>
    <button @click="track('button clicked')">Click me</button>
  </div>
</template>

<script setup lang="ts">
const { track } = useSegment();
</script>
