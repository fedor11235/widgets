<template>
  <q-item clickable>
    <q-item-section>
      <q-select
        outlined
        v-model="widgetsNewCollectionStore.position"
        :options="emersionOptions"
        label="Расположение"
      ></q-select>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

const emersionOptions = [
  { label: "Модалка", value: "modal" },
  { label: "Левая панель", value: "panelLeft" },
  { label: "Правая панель", value: "panelRight" },
  { label: "В левом нижнем углу", value: "sideInLeft" },
  { label: "В правом нижнем правом углу", value: "sideInRight" },
  { label: "Верхний бар", value: "barTop" },
  { label: "Нижний бар", value: "barBottom" },
];

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();
</script>
