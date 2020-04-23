<template>
  <div class="base-select">
    <label v-if="label" for="base-select">{{ label }}</label>
    <select name="base-select" id="base-select" @change="onSelectChanged">
      <option disabled selected value> -- select an option -- </option>
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
  margin: auto;
  width: 50%;
}

label {
  display: block;
  margin: 0.5em 0;
}

#base-select {
  background-color: white;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  height: 2em;
  border: 2px solid red;
}
</style>
