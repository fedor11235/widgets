<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Обзор и настройка виджетов </q-toolbar-title>

        <div>Попапы v1.0.0.</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      elevated
      behavior="desktop"
      no-swipe-backdrop
      class="bg-grey-2"
    >
      <!-- :overlay="false" -->
      <!-- mini -->
      <q-list>
        <q-item-label header>Настройка виджета</q-item-label>
        <q-item
          v-for="model of models"
          :key="model.id"
          v-show="mainStore.panelMode === 'default'"
          clickable
          v-ripple
          active-class="my-menu-link"
          @click="mainStore.panelMode = 'collectionSelectSettings'"
        >
          <q-item-section avatar>
            <q-icon name="arrow_forward" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ model.title }}</q-item-label>
            <q-item-label caption>{{ model.caption }}</q-item-label>
          </q-item-section>
        </q-item>

        <component
          v-if="mainStore.settingsMode === 'default'"
          :is="mainStore.settingsMenu?.widgetSettings"
        />
        <component v-else :is="mainStore.settingsComponent" />

        <q-item
          v-if="mainStore.panelMode !== 'default'"
          clickable
          v-ripple
          active-class="my-menu-link"
          @click="handlerBack"
        >
          <q-item-section avatar>
            <q-icon name="undo" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ backText }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <component :is="mainStore.settingsMenu?.widgetView" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";

import { uaeMainStore } from "@/store/mainStore";

import WidgetsNewCollection from "./components/widgetsNewCollection/WidgetsNewCollection.vue";
// import WidgetsNewCollectionSettings from "./components/WidgetsNewCollectionSettings.vue";
import WidgetsNewCollectionSelectSettings from "./components/widgetsNewCollection/WidgetsNewCollectionSelectSettings.vue";

const models = [
  {
    id: 0,
    select: "newCollection",
    title: "Новая коллекция",
    caption: "шаблон",
    widgetView: WidgetsNewCollection,
    widgetSettings: WidgetsNewCollectionSelectSettings,
  },
];

const mainStore = uaeMainStore();

const leftDrawerOpen = ref(false);

const backText = computed(() => {
  if (mainStore.settingsMode !== "default") {
    return "Назад к настройкам";
  } else {
    return "Назад к шаблонам";
  }
});

function handlerBack() {
  if (mainStore.settingsMode !== "default") {
    mainStore.settingsMode = "default";
  } else {
    mainStore.panelMode = "default";
  }
}
</script>

<style>
.my-menu-link {
  color: white;
  background-color: #d6d4d4;
}
</style>
