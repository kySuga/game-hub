import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '7798e318bfa84d7ba73bc58002ea21da'
  }
})