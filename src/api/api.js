import axios from 'axios'

// for dev
const ERROR_OK = 0

function get (url) {
  return function (params = {}) {
    return axios.get(url, { params }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERROR_OK) {
        return data
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')

export { getSeller, getGoods, getRatings }
