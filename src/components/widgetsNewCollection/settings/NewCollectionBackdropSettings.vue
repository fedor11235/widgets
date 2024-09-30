<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета задника</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.backdropColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Прозрачность:
        {{ widgetsNewCollectionStore.backdropOpacity }}
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.backdropOpacity"
        :min="0"
        :max="1"
        :step="0.1"
      ></q-slider>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();
</script>
