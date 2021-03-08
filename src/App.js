import React from "react"
import { PrimaryButton } from "./components/atoms/button/PrimaryButton"
import { SecondaryButton } from "./components/atoms/button/SecondaryButton"
import { SearchInput } from "./components/molecules/SearchInput"
import { UserCard } from "./components/organisms/user/UserCard"
import "./styles.css"

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
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  )
}

export default App
