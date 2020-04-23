import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  authentication: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getCinemaOptions = function() {
  return apiClient.get('/cinemaOptions')
}

const getListings = function(id) {
  return apiClient.get(`/listings/${id}`)
}

export default { getCinemaOptions, getListings }
