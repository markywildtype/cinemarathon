import { addDays, format } from 'date-fns'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'selectedCinemaId',
      'selectedDate',
      'cinemaOptions',
      'listings'
    ]),
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
        return { id: index, value: date, display: format(date, 'E do LLLL') }
      })
    }
  },
  methods: {
    ...mapActions([
      'fetchCinemaOptions',
      'setSelectedCinemaId',
      'setSelectedDate'
    ])
  }
}
