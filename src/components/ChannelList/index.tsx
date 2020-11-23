import React from 'react'

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='chat' />
      <ChannelButton channelName='memes' />
      <ChannelButton channelName='coding' />
      <ChannelButton channelName='jukebox' />
      <ChannelButton channelName='valorant' />
      <ChannelButton channelName='csgo' />
    </Container>
  )
}

export default ChannelList
