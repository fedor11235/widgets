<template>
  <q-item clickable>
    <q-item-section>
      <q-select
        outlined
        v-model="widgetsNewCollectionStore.fade"
        :options="emersionOptions"
        label="Появление"
      ></q-select>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Закругление виджета:
        {{ widgetsNewCollectionStore.wiwgetBorderRadius }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.wiwgetBorderRadius"
        :min="0"
        :max="20"
      ></q-slider>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета виджета</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.widgetColor"
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

const emersionOptions = [
  { label: "Пермещение снизу", value: "fadeDown" },
  { label: "Пермещение сверху", value: "fadeTop" },
  { label: "Пермещение слева", value: "fadeLeft" },
  { label: "Пермещение справа", value: "fadeRight" },
];

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();
</script>
