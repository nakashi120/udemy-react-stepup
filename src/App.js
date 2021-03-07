import React, { useState, useCallback, useMemo } from "react"
import { ChildArea } from "./ChildArea"

function App() {
  console.log("App")
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  const onClickOpen = () => {
    setOpen(!open)
  }

  const onClickClose = useCallback(() => setOpen(false), [setOpen])

  const temp = useMemo(() => 1 + 3, [])
  console.log(temp)

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  )
}

export default App
