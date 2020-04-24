<template>
  <div>
    <base-select
      :options="cinemaOptions"
      label="Choose your cinema: "
      @value-selected="setSelectedCinema"
    />
    <base-select
      :options="dateOptions"
      label="Choose your date: "
      @value-selected="setSelectedDate"
    />
  </div>
</template>

<script>
export default {
  props: {
    cinemaOptions: {
      type: Array,
      required: true
    },
    dateOptions: {
      type: Array,
      required: true
    }
  },
  methods: {
    setSelectedCinema(value) {
      this.$emit('set-selected-cinema-id', value)
    },
    setSelectedDate(value) {
      this.$emit('set-selected-date', value)
    }
  }
}
</script>
