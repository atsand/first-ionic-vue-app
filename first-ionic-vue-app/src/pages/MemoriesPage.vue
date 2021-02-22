<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list v-if="memories" :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import {add} from 'ionicons/icons'
import MemoriesList from '../components/memories/MemoriesList.vue';

export default {
  components: {
    IonButton,
    IonIcon,
    MemoriesList,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    }
  },
  data() {
    return {
      add,
    }
  },
}
</script>

<style scoped>
  ion-item {
    background-color: red;
  }
</style>