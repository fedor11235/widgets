<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета задника</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.backdropColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета кнопки</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.buttonColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.title"
        label="Текст заголовка"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.subtitle"
        label="Текст подзаголовка"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.description"
        label="Текст описания"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        :width="200"
        v-model="widgetsNewCollectionStore.buttonText"
        label="Текст кнопки"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-input
        outlined
        v-model="widgetsNewCollectionStore.buttonLink"
        label="Ссылка кнопки"
      ></q-input>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-btn
        style="background: goldenrod; color: white"
        label="Загрузить своё изображение"
        @click="handlerUploadImg"
      ></q-btn>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-select
        outlined
        v-model="widgetsNewCollectionStore.fade"
        :options="emersionOptions"
        label="Появление"
      ></q-select>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Закругление виджета:
        {{ widgetsNewCollectionStore.wiwgetBorderRadius }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.wiwgetBorderRadius"
        :min="0"
        :max="20"
      ></q-slider>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета текста кнопки</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.buttonTextColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Закругление кнопки: {{ widgetsNewCollectionStore.wiwgetBorderRadius }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.buttonBorderRaius"
        :min="0"
        :max="20"
      ></q-slider>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета заголовка</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.titleColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета подзаголовка</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.subtitleColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета описания</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.descriptionColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Настройка прозрачности фона:
        {{ widgetsNewCollectionStore.backdropOpacity }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.backdropOpacity"
        :min="0"
        :max="1"
        :step="0.1"
      ></q-slider>
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-item-label>Найстройка цвета виджета</q-item-label>

      <br />

      <q-color
        name="accent_color"
        v-model="widgetsNewCollectionStore.widgetColor"
        no-header
        no-footer
        style="width: 100%"
      ></q-color>

      <br />
    </q-item-section>
  </q-item>

  <q-item clickable>
    <q-item-section>
      <q-badge>
        Закругление кнопки: {{ widgetsNewCollectionStore.imgBorderRaius }}px
      </q-badge>

      <q-slider
        v-model="widgetsNewCollectionStore.imgBorderRaius"
        :min="0"
        :max="20"
      ></q-slider>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

const emersionOptions = [
  { label: "Пермещение снизу", value: "fadeDown" },
  { label: "Пермещение сверху", value: "fadeTop" },
  { label: "Пермещение слева", value: "fadeLeft" },
  { label: "Пермещение справа", value: "fadeRight" },
];

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();

function handlerUploadImg() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.click();
  fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async function (event) {
      widgetsNewCollectionStore.img = event?.target?.result;
    };
    reader.readAsDataURL(file);
  });
}
</script>
