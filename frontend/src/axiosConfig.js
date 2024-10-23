import axios from "axios"

axios.defaults.baseURL =
  process.env.NODE_ENV !== "production"
    ? "https://food-delivery-app-mern-ttz9.vercel.app/"
    : "/"
