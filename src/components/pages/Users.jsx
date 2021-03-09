import { useContext, memo } from "react"
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Nakashi${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "sample@sample.com",
    phone: "000-1111-2222",
    company: {
      name: "sample株式会社",
    },
    website: "https://sample.com",
  }
})

export const Users = memo(() => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
})

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
