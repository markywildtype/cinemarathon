<template>
  <div>
    <label v-if="label" for="base-select">{{ label }}</label>
    <select name="base-select" id="base-select" @change="onSelectChanged">
      <option disabled selected value> -- select an option -- </option>
      <option
        class="base-select-option"
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        >{{ option.name }}</option
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
#base-select {
  background-color: white;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  height: 2em;
  border: 2px solid red;
}

.base-select-option {
  height: 2em;
}
</style>
