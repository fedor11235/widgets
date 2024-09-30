import WidgetsNewCollection from "@/components/widgetsNewCollection/WidgetsNewCollection.vue";
// import WidgetsNewCollectionSettings from "./components/WidgetsNewCollectionSettings.vue";
import WidgetsNewCollectionSelectSettings from "@/components/widgetsNewCollection/WidgetsNewCollectionSelectSettings.vue";

import NewCollectionBackdropSettings from "@/components/widgetsNewCollection/settings/NewCollectionBackdropSettings.vue";

import { defineStore } from "pinia";

export const uaeMainStore = defineStore("main", {
  state: () => ({
    panelMode: "default",
    settingsMode: "default",
  }),
  getters: {
    settingsMenu: (state) => {
      if (state.panelMode === "collectionSelectSettings") {
        return {
          id: 0,
          select: "newCollection",
          title: "Новая коллекция",
          caption: "шаблон",
          widgetView: WidgetsNewCollection,
          widgetSettings: WidgetsNewCollectionSelectSettings,
        };
      }
    },

    settingsComponent: (state) => {
      if (state.panelMode === "newCollectionBackdropSettings") {
        return NewCollectionBackdropSettings
      } else if (state.panelMode === "newCollectionWidgetSettings") {
        return NewCollectionBackdropSettings
      } else if (state.panelMode === "newCollectionTitleSettings") {
        return NewCollectionBackdropSettings
      } else if (state.panelMode === "newCollectionSubtitleSettings") {
        return NewCollectionBackdropSettings
      } else if (state.panelMode === "newCollectionDescriptionSettings") {
        return NewCollectionBackdropSettings
      } else if (state.panelMode === "newCollectionImgSettings") {
        return NewCollectionBackdropSettings
      } else if (state.panelMode === "newCollectionButtonSettings") {
        return NewCollectionBackdropSettings
      }
    },
  },
});

// const state = "collectionSelectSettings" |
//   | "default"

// const settingsMode = newCollectionBackdropSettings",
//   | "newCollectionWidgetSettings",
//   | "newCollectionTitleSettings",
//   | "newCollectionSubtitleSettings",
//   | "newCollectionDescriptionSettings",
//   | "newCollectionImgSettings",
//   | "newCollectionButtonSettings"

