import React, { memo } from 'react'
import Button from 'antd/lib/button'
import Gn from './Gn.js'

import './Index.scss'

const Index = () => {
  return (
    <div className='Index'>
      <Gn />
      <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={true} onClick={() => {}}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading={true} onClick={() => {}}>
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </span>
    </div>
  )
}

export default memo(Index)
