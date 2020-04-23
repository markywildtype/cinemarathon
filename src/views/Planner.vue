<template>
  <div>
    <h1>Plan your Cine<span class="red-text">Marathon</span></h1>
    <base-select
      :options="cinemaOptions"
      label="Choose your cinema: "
      @value-selected="setSelectedCinema"
    />
    <base-select
      :options="formattedDates"
      label="Choose your date: "
      @value-selected="setSelectedDate"
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
import { addDays, format } from 'date-fns'
import api from '@/sevices/api'

export default {
  data() {
    return {
      cinemaOptions: [],
      listings: [],
      selectedCinemaId: null,
      selectedDate: ''
    }
  },
  computed: {
    dates() {
      const today = new Date()
      let dates = [today]

      for (let i = 1; i < 7; i++) {
        const newDate = addDays(today, i)

        dates.push(newDate)
      }

      return dates
    },
    formattedDates() {
      return this.dates.map((date, index) => {
        return { id: index, value: date, display: format(date, 'E Mo LLLL') }
      })
    }
  },
  created() {
    this.fetchCinemaOptions()
  },
  methods: {
    async fetchCinemaOptions() {
      const response = await api.getCinemaOptions()

      this.cinemaOptions = response.data
    },
    async fetchListings() {
      const response = await api.getListings(this.selectedCinemaId)

      this.listings = response.data.listings
    },
    setSelectedCinema(value) {
      this.selectedCinemaId = parseInt(value)
      this.fetchListings() //This should be called when there is a date associated
    },
    setSelectedDate(value) {
      this.selectedDate = value
    }
  }
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
