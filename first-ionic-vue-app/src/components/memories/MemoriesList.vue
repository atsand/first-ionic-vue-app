<template>
  <ion-list v-if="memories">
    <memory-list-item 
      v-for="memory in memories"
      :key="memory.id"
      :router-link="`/memories/${memory.id}`"
      :memory="memory"
    >      
    </memory-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import MemoryListItem from './MemoryListItem.vue';

export default {
  components: {
    IonList,
    MemoryListItem
  },
  data() {
    return {

    }
  },
  props: {
    memories: {
      type: Array,
      deafult: null,
    }
  }
}
</script>