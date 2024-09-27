import { defineStore } from "pinia";

export const useWidgetsNewCollectionStore = defineStore(
  "widgetsNewCollection",
  {
    state: () => ({
      backdropColor: "#7ba0c4",
      buttonColor: "rgb(203, 171, 73)",
      title: "10% процентов скидки",
      subtitle: "Новая коллекция",
      description: "Получи скидку прямо сейчас",
      img: "",
      fade: { label: "Пермещение сверху", value: "fadeTop" },
    }),
  },
);
