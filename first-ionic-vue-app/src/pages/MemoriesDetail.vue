<template>
  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">The details page</h2>
    <h2 v-else>{{ loadedMemory.title }} details</h2>
  </base-layout>
</template>

<script>

export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    }
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    }
  },
}
</script>