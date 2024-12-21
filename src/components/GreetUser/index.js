import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')

  const onChangeName = event => console.log(setName(event.target.value))
  console.log('component redered()')

  return (
    <MainContainer>
      <NameInput type="text" placeholder="Your name" onChange={onChangeName} />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
