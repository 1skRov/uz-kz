<script>
import {BASE_URL} from "@/axios";

export default {
  name: "DocumentItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    docs: {
      type: String,
    },
  },
  data() {
    return {
      BASE_URL,
    };
  },
  computed: {
    fullDocPath() {
      return this.docs ? `${this.BASE_URL}${this.docs}` : null;
    },
    isDownloadable() {
      return !!this.docs;
    },
  },
  methods: {
    async downloadFile() {
      if (this.fullDocPath) {
        try {
          const response = await fetch(this.fullDocPath, {
            method: "GET",
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = this.title;
          document.body.appendChild(link);
          link.click();
          link.remove();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Ошибка при загрузке файла:", error);
        }
      } else {
        console.error("Файл не указан!");
      }
    },
  },
};
</script>

<template>
  <div class="doc">
    <span>{{ title }}</span>
    <div
        class="download-icon"
        :class="{ disabled: !isDownloadable }"
        @click="isDownloadable ? downloadFile() : null"
    >
      <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20"
            stroke="#0072AB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M9.33301 13.3333L15.9997 20L22.6663 13.3333"
            stroke="#0072AB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M16 20V4"
            stroke="#0072AB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.doc {
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 15px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #333333;
  border: 1px solid #EBEEF0;
  background-color: #FAFCFD;
}

.download-icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.download-icon.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.download-icon:not(.disabled):hover {
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .doc {
    width: 94%;
  }
}

@media (max-width: 768px) {
  .doc {
    width: 90%;
  }
}
</style>
