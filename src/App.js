import React from "react"
import "./styles.css"
import axios from "axios"

const App = () => {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => console.log(err))
  }
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((result) => {
        console.log(result.data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </>
  )
}

export default App
