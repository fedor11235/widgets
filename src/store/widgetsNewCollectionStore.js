import { defineStore } from "pinia";

export const useWidgetsNewCollectionStore = defineStore(
  "widgetsNewCollection",
  {
    state: () => ({
      backdropColor: "#7ba0c4",
      backdropOpacity: 1,
      buttonColor: "rgb(203, 171, 73)",
      buttonLink: "https://www.google.com/",
      buttonText: "Показать",
      buttonTextColor: "black",
      title: "10% процентов скидки",
      subtitle: "Новая коллекция",
      description: "Получи скидку прямо сейчас",
      img: "",
      imgBorderRaius: 0,
      fade: { label: "Пермещение сверху", value: "fadeTop" },
      wiwgetBorderRadius: 0,
      widgetColor: "white",
      buttonBorderRaius: 0,
      titleColor: "black",
      subtitleColor: "#727171",
      descriptionColor: "#727171",
    }),
  },
);
