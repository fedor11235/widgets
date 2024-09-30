import { defineStore } from "pinia";

export const useWidgetsNewCollectionStore = defineStore(
  "widgetsNewCollection",
  {
    state: () => ({
      // Настройка задника
      backdropColor: "#7ba0c4",
      backdropOpacity: 1,

      // Настройка виджета
      fade: { label: "Пермещение сверху", value: "fadeTop" },
      wiwgetBorderRadius: 0,
      widgetColor: "white",

      // Настройка заголовка
      title: "10% процентов скидки",
      titleColor: "black",

      // Настройка подзаголовка
      subtitle: "Новая коллекция",
      subtitleColor: "#727171",

      // Настройка описания
      description: "Получи скидку прямо сейчас",
      descriptionColor: "#727171",

      // Настройка картинки
      img: "",
      imgBorderRaius: 0,

      // Настройка кнопки
      buttonColor: "rgb(203, 171, 73)",
      buttonLink: "https://www.google.com/",
      buttonText: "Показать",
      buttonTextColor: "black",
      buttonBorderRaius: 0,
    }),
  },
);
