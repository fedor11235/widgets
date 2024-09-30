<template>
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
