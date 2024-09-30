<template>
  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionBackdropSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка задника</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionWidgetSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка виджета</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionTitleSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка заголовка</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionSubtitleSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка подзаголовка</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionDescriptionSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка описания</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionImgSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка картинки</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionButtonSettings'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка кнопки</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="mainStore.settingsMode = 'newCollectionWidgetLayout'"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка располжения</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { uaeMainStore } from "@/store/mainStore";
// import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

// const emersionOptions = [
//   { label: "Пермещение снизу", value: "fadeDown" },
//   { label: "Пермещение сверху", value: "fadeTop" },
//   { label: "Пермещение слева", value: "fadeLeft" },
//   { label: "Пермещение справа", value: "fadeRight" },
// ];

// const widgetsNewCollectionStore = useWidgetsNewCollectionStore();
const mainStore = uaeMainStore();
</script>
