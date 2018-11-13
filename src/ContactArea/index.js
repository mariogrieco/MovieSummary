import React from 'react'

import './ContactArea.scss'

import {
  Input
} from 'antd'


import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const { TextArea } = Input;
const ContactArea = ({
  title
}) => {
  return (
    <div className='ContactAreaLayout'>
      <div className='ContactArea'>
        <span className='ContactAreaTitle'>
          {title}
        </span>
        <div className='ContactAreaBody'>
          <Row>
            <Col xs={24} md={8}>
              <span>
                Name
              </span>
            </Col>
            <Col xs={24} md={16}>
              <Input placeholder="" />
            </Col>
          </Row>

          <Row>
            <Col xs={24} md={8}>
              <span>
                Email
              </span>
            </Col>
            <Col xs={24} md={16}>
              <Input placeholder="" />
            </Col>
          </Row>


          <Row>
            <Col xs={24} md={8}>
              <span>
                Message
              </span>
            </Col>
            <Col xs={24} md={16}>
              <TextArea style={{
                height: '215px'
              }}/>
            </Col>
          </Row>
        </div>

        <div className='ContactAreaSend'>
          Send
        </div>
      </div>
    </div>
  )
}

export default ContactArea

