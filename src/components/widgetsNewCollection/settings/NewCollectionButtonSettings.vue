<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета кнопки</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.buttonColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        :width="200"
        v-model="widgetsNewCollectionStore.buttonText"
        label="Текст кнопки"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.buttonLink"
        label="Ссылка кнопки"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета текста кнопки</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.buttonTextColor"
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
        Закругление кнопки: {{ widgetsNewCollectionStore.wiwgetBorderRadius }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.buttonBorderRaius"
        :min="0"
        :max="20"
      ></q-slider>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Закругление кнопки: {{ widgetsNewCollectionStore.imgBorderRaius }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.imgBorderRaius"
        :min="0"
        :max="20"
      ></q-slider>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();
</script>
