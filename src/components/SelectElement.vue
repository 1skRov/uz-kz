<template>
  <details class="custom-select" ref="customSelect">
    <summary class="radios">
      <span>{{ selectedItem?.name || 'Выберите' }}</span>
    </summary>
    <ul class="list">
      <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ selected: selectedIndex === index }"
          @click="selectItem(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </details>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  computed: {
    selectedItem() {
      return this.items[this.selectedIndex] || null;
    }
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index;

      const selectedRoute = this.items[index]?.route;
      if (selectedRoute) {
        this.$router.push(selectedRoute);
      }

      const details = this.$refs.customSelect;
      if (details) {
        details.open = false;
      }
    }
  }
};

</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
}

.custom-select[open] {
  z-index: 2000;
}

.custom-select summary {
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: #0072ab;
  list-style: none;
  border: 1px solid #EBEEF0;
  color: #FFFFFF;
}

.custom-select summary::-webkit-details-marker {
  display: none;
}

.custom-select summary:after {
  content: '';
  display: inline-block;
  float: right;
  width: .5rem;
  height: .5rem;
  border-bottom: 1px solid currentColor;
  border-left: 1px solid currentColor;
  border-bottom-left-radius: 2px;
  transform: rotate(45deg) translate(50%, 0%);
  transition: transform ease-in-out 100ms;
}

.custom-select summary:focus {
  outline: none;
}

.custom-select[open] summary:after {
  transform: rotate(-45deg) translate(0%, 0%);
}

.custom-select ul {
  width: 100%;
  background: #FFFFFF;
  position: absolute;
  top: calc(100% + .5rem);
  left: 0;
  margin: 0;
  box-sizing: border-box;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  border: 1px solid #0072AB;
}

.custom-select li {
  margin: 0;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.custom-select li.selected {
  background-color: #0072AB;
  color: #FFFFFF;
}

.custom-select li:hover {
  background-color: #F0F4F8;
}

.custom-select li:last-child {
  border-bottom: none;
}

</style>
