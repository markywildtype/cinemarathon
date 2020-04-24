<template>
  <div class="base-select">
    <select name="base-select" id="base-select" @change="onSelectChanged">
      <option disabled selected> --{{ label }}-- </option>
      <option
        class="base-select-option"
        v-for="option in options"
        :key="option.id"
        :value="option.value"
        >{{ option.display }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: false
    }
  },
  methods: {
    onSelectChanged(event) {
      this.$emit('value-selected', event.target.value)
    }
  }
}
</script>

<style scoped>
.base-select {
  margin: 1em auto;
  width: 50%;
}

#base-select {
  background-color: black;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  height: 2em;
  border: 2px solid red;
  width: 200px;
}

option {
  margin: auto;
  justify-content: center;
}
</style>
