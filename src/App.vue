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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Настройка виджета</q-item-label>
        <q-item
          v-for="model of models"
          :key="model.id"
          v-show="!modelSelect"
          clickable
          v-ripple
          :active="modelSelect === model"
          active-class="my-menu-link"
          @click="modelSelect = model"
        >
          <q-item-section avatar>
            <q-icon
              :name="
                modelSelect.select === model.select
                  ? 'check_box'
                  : 'check_box_outline_blank'
              "
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ model.title }}</q-item-label>
            <q-item-label caption>{{ model.caption }}</q-item-label>
          </q-item-section>
        </q-item>

        <component :is="modelSelect.widgetSettings" />

        <q-item
          v-if="modelSelect"
          clickable
          v-ripple
          active-class="my-menu-link"
          @click="modelSelect = ''"
        >
          <q-item-section avatar>
            <q-icon name="undo" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Назад к шаблонам</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <component :is="modelSelect.widgetView" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

import WidgetsNewCollection from "./components/WidgetsNewCollection.vue";
import WidgetsNewCollectionSettings from "./components/WidgetsNewCollectionSettings.vue";

const models = [
  {
    id: 0,
    select: "newCollection",
    title: "Новая коллекция",
    caption: "шаблон",
    widgetView: WidgetsNewCollection,
    widgetSettings: WidgetsNewCollectionSettings,
  },
];

const leftDrawerOpen = ref(false);
const modelSelect = ref("");
</script>

<style>
.my-menu-link {
  color: white;
  background-color: #d6d4d4;
}
</style>
