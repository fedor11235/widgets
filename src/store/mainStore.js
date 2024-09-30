import WidgetsNewCollection from "@/components/widgetsNewCollection/WidgetsNewCollection.vue";
// import WidgetsNewCollectionSettings from "./components/WidgetsNewCollectionSettings.vue";
import WidgetsNewCollectionSelectSettings from "@/components/widgetsNewCollection/WidgetsNewCollectionSelectSettings.vue";

import { defineStore } from "pinia";

export const uaeMainStore = defineStore("main", {
  state: () => ({
    panelMode: "default",
  }),
  getters: {
    settings: (state) => {
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
  },
});

// const state = "collectionSelectSettings" |
//   | "default"
//   | "newCollectionBackdropSettings",
//   | "newCollectionWiwgetSettings",
//   | "newCollectionTitleSettings",
//   | "newCollectionSubtitleSettings",
//   | "newCollectionDescriptionSettings",
//   | "newCollectionImgSettings",
//   | "newCollectionButtonSettings"
