import axios from 'axios'

const AdviceSlip = axios.create({
  baseURL: 'https://api.adviceslip.com',
})

export default AdviceSlip
