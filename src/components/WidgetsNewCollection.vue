<template>
  <q-page class="flex flex-center">
    <div
      class="backdrop popup-close"
      id="backdrop"
      :style="{
        backgroundColor: widgetsNewCollectionStore.backdropColor,
      }"
    ></div>

    <div
      :style="{
        animation: `0.3s ${widgetsNewCollectionStore.fade?.value} ease`,
      }"
      class="widgets"
      id="widget"
    >
      <div class="widgets_cansel popup-close">
        <div class="widgets_cansel_warpper-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="m3.426 2.024.094.083L8 6.586l4.48-4.479a1 1 0 0 1 1.497 1.32l-.083.095L9.414 8l4.48 4.478a1 1 0 0 1-1.32 1.498l-.094-.083L8 9.413l-4.48 4.48a1 1 0 0 1-1.497-1.32l.083-.095L6.585 8 2.106 3.522a1 1 0 0 1 1.32-1.498Z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="widgets_part widgets_part_left">
        <div class="widgets_warpper_text">
          <div class="widgets_subtitle">
            {{ widgetsNewCollectionStore.subtitle }}
          </div>
          <div class="widgets_title">{{ widgetsNewCollectionStore.title }}</div>
          <div class="widgets_description">
            {{ widgetsNewCollectionStore.description }}
          </div>
        </div>

        <a
          :style="{
            backgroundColor: widgetsNewCollectionStore.buttonColor,
          }"
          class="button-order"
          target="_blank"
          href="https://www.google.com/"
          >Показать</a
        >
      </div>
      <img
        class="widgets_part"
        :src="
          widgetsNewCollectionStore.img
            ? widgetsNewCollectionStore.img
            : 'sample.jpeg'
        "
      />
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { useWidgetsNewCollectionStore } from "@/store/widgetsNewCollectionStore";

const widgetsNewCollectionStore = useWidgetsNewCollectionStore();

onMounted(() => {
  const backdrop = document.getElementById("backdrop");
  const widget = document.getElementById("widget");

  const popupsClose = document.getElementsByClassName("popup-close");

  function handlerClosePopup() {
    backdrop.style.display = "none";
    widget.style.display = "none";

    setTimeout(() => {
      backdrop.style.display = "block";
      widget.style.display = "grid";
    }, 1000);
  }

  // widget.addEventListener("click", (event) => event.stopPropagation())

  for (const popupClose of popupsClose) {
    popupClose.addEventListener("click", handlerClosePopup);
  }
});
</script>

<style>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.widgets {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  width: 560px;
  max-height: 560px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* pointer-events: none; */
}

.widgets_warpper_text {
  text-align: center;
}

.widgets_title {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 12px;
}

.widgets_subtitle {
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 12px;
}

.widgets_description {
  font-size: 12px;
  font-weight: 400;
  color: #727171;
}

.widgets_cansel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background-color: rgba(231, 231, 231, 0.95);
  border-radius: 50%;
  cursor: pointer;
}

.widgets_cansel_warpper-svg {
  width: 16px;
  height: 16px;
}

.widgets_part {
  width: 100%;
  height: 100%;
}

.widgets_part_left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
}

.button-order {
  font-size: 18px;
  background-color: rgb(203, 171, 73);
  text-decoration: none;
  color: white;
  padding: 12px 0;
  width: 100%;
  text-align: center;
}

@keyframes fadeTop {
  from {
    opacity: 0;
    transform: translate(-50%, -30%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translate(-50%, -80%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translate(-30%, -50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translate(-80%, -50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
