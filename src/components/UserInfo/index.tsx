import React from 'react'

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Gabriel Aranda</strong>
          <span>#9910</span>
        </UserData>
      </Profile>

      <Icons>
        <button>
          <MicIcon />
        </button>
        <button>
          <HeadphoneIcon />
        </button>
        <button>
          <SettingsIcon />
        </button>
      </Icons>
    </Container>
  )
}

export default UserInfo
