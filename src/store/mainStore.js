import WidgetsNewCollection from "@/components/widgetsNewCollection/WidgetsNewCollection.vue";
// import WidgetsNewCollectionSettings from "./components/WidgetsNewCollectionSettings.vue";
import WidgetsNewCollectionSelectSettings from "@/components/widgetsNewCollection/WidgetsNewCollectionSelectSettings.vue";

import NewCollectionBackdropSettings from "@/components/widgetsNewCollection/settings/NewCollectionBackdropSettings.vue";
import NewCollectionWidgetSettings from "@/components/widgetsNewCollection/settings/NewCollectionWidgetSettings.vue";
import NewCollectionTitleSettings from "@/components/widgetsNewCollection/settings/NewCollectionTitleSettings.vue";
import NewCollectionSubtitleSettings from "@/components/widgetsNewCollection/settings/NewCollectionSubtitleSettings.vue";
import NewCollectionDescriptionSettings from "@/components/widgetsNewCollection/settings/NewCollectionDescriptionSettings.vue";
import NewCollectionImgSettings from "@/components/widgetsNewCollection/settings/NewCollectionImgSettings.vue";
import NewCollectionButtonSettings from "@/components/widgetsNewCollection/settings/NewCollectionButtonSettings.vue";

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
      if (state.settingsMode === "newCollectionBackdropSettings") {
        return NewCollectionBackdropSettings;
      } else if (state.settingsMode === "newCollectionWidgetSettings") {
        return NewCollectionWidgetSettings;
      } else if (state.settingsMode === "newCollectionTitleSettings") {
        return NewCollectionTitleSettings;
      } else if (state.settingsMode === "newCollectionSubtitleSettings") {
        return NewCollectionSubtitleSettings;
      } else if (state.settingsMode === "newCollectionDescriptionSettings") {
        return NewCollectionDescriptionSettings;
      } else if (state.settingsMode === "newCollectionImgSettings") {
        return NewCollectionImgSettings;
      } else if (state.settingsMode === "newCollectionButtonSettings") {
        return NewCollectionButtonSettings;
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
