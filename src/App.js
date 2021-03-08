import React from "react"
import "./styles.css"
import { Router } from "./router/Router"

const user = {
  name: "Nakashi",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "sample@sample.com",
  phone: "000-1111-2222",
  company: {
    name: "sample株式会社",
  },
  website: "https://sample.com",
}

const App = () => {
  return <Router />
}

export default App
