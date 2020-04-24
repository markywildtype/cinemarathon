<template>
  <div class="about">
    <h1>This is an about page</h1>
    <screenings-select
      :cinema-options="cinemaOptions"
      :date-options="formattedDates"
      @set-selected-cinema-id="setSelectedCinemaId"
      @set-selected-date="setSelectedDate"
    />
    <div class="listings-display" v-if="selectedCinemaId">
      <div v-for="listing in listings" :key="listing.id">
        <h1>{{ listing.name }}</h1>
        <div class="screening-times-container">
          <p class="screening-time" v-for="time in listing.times" :key="time">
            {{ time }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScreeningsSelect from '@/components/ScreeningsSelect'
import CinemaBase from '@/mixins/CinemaBase'

export default {
  components: { ScreeningsSelect },
  mixins: [CinemaBase]
}
</script>

<style scoped>
.screening-times-container {
  display: flex;
  justify-content: center;
}

.screening-time {
  margin: 1em;
}
</style>
