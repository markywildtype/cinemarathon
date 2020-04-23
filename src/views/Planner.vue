<template>
  <div>
    <h1>Plan your Cine<span class="red-text">Marathon</span></h1>
    <base-select
      :options="cinemaOptions"
      label="Choose your cinema: "
      @value-selected="setSelectedCinema"
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
export default {
  data() {
    return {
      cinemaOptions: [
        // Placeholder data - to be retrieved from elsewhere
        { id: 1, name: 'Cineworld' },
        { id: 2, name: 'Cameo' },
        { id: 3, name: 'Filmhouse' },
        { id: 4, name: 'Odeon (Lothian Road)' },
        { id: 5, name: 'Vue (Omni Centre)' }
      ],
      listingsPlaceholderData: [
        {
          cinemaId: 1,
          listings: [
            {
              id: 1,
              name: 'A Quiet Place Part II',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            },
            {
              id: 2,
              name: 'EMMA!',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            },
            {
              id: 3,
              name: 'Mimizzeria',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            }
          ]
        },
        {
          cinemaId: 2,
          listings: [
            {
              id: 1,
              name: 'Trolls: World Tour',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            },
            {
              id: 2,
              name: 'My GOD!',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            },
            {
              id: 3,
              name: 'Chips please Mr. Bum!',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            }
          ]
        },
        {
          cinemaId: 3,
          listings: [
            {
              id: 1,
              name: 'My bum is itchy',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            },
            {
              id: 2,
              name: 'Where is my mind?',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            },
            {
              id: 3,
              name: 'Dobby and the golden sock',
              times: ['11:00', '13:20', '15:30', '18:00', '20.45']
            }
          ]
        }
      ],
      selectedCinemaId: null
    }
  },
  computed: {
    listings() {
      if (!this.selectedCinemaId) {
        return
      }

      const selectedCinema = this.listingsPlaceholderData.find(
        cinema => cinema.cinemaId === this.selectedCinemaId
      )

      console.log(selectedCinema.cinemaId)
      console.log(selectedCinema.listings[0].name)
      console.log(this.listingsPlaceholderData[1].cinemaId)
      console.log(this.listingsPlaceholderData[1].listings[0])
      return selectedCinema.listings
    }
  },
  methods: {
    setSelectedCinema(value) {
      this.selectedCinemaId = parseInt(value)
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
