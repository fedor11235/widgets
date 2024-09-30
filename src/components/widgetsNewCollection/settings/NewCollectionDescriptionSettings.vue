<template>
  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.description"
        label="Текст описания"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета описания</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.descriptionColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();
</script>
