<template>
  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.subtitle"
        label="Текст подзаголовка"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета подзаголовка</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.subtitleColor"
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
