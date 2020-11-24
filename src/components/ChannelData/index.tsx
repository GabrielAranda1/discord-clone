import React from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage key={n} author='Gabriel Aranda' date='24/11/2020' content='Testando...' />
        ))}
        <ChannelMessage author='Gabriel Aranda' date='24/11/2020' content='Boa noite time' />
        <ChannelMessage
          author='Senoura'
          date='24/11/2020'
          content={
            <>
              <Mention>@Gabriel Aranda</Mention> boa noite meu primo.
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
