<template>
  <div class="planner">
    <h1>Plan your <span class="red-text">Marathon</span></h1>
    <screenings-select
      :cinema-options="cinemaOptions"
      :date-options="formattedDates"
      @set-selected-cinema-id="setSelectedCinemaId"
      @set-selected-date="setSelectedDate"
    />
  </div>
</template>

<script>
import ScreeningsSelect from '@/components/ScreeningsSelect'
import CinemaBase from '@/mixins/CinemaBase'

export default {
  components: { ScreeningsSelect },
  mixins: [CinemaBase],
  created() {
    this.fetchCinemaOptions()
  }
}
</script>
