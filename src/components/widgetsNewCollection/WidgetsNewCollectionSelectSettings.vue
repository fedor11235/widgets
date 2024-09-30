<template>
  <q-item
    clickable
    v-ripple
    active-class="my-menu-link"
    @click="hsndlerSelectSetting"
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
    @click="hsndlerSelectSetting"
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
    @click="hsndlerSelectSetting"
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
    @click="hsndlerSelectSetting"
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
    @click="hsndlerSelectSetting"
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
    @click="hsndlerSelectSetting"
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
    @click="hsndlerSelectSetting"
  >
    <q-item-section avatar>
      <q-icon name="settings" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Настройка кнопки</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
// import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

// const emersionOptions = [
//   { label: "Пермещение снизу", value: "fadeDown" },
//   { label: "Пермещение сверху", value: "fadeTop" },
//   { label: "Пермещение слева", value: "fadeLeft" },
//   { label: "Пермещение справа", value: "fadeRight" },
// ];

// const widgetsNewCollectionStore = useWidgetsNewCollectionStore();

function hsndlerSelectSetting() {
  console.log("!!!!!!!!");
}
</script>
