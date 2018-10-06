import React from 'react'
import Head from 'next/head'
import { DatePicker, Layout, message } from 'antd'

const { Header, Footer, Content } = Layout

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
    }
  }
  handleChange(date) {
    message.info('Selected Date: ' + (date ? date.toString() : ''))
    this.setState({ date })
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Head>
          <title>Join the Social Movement | God is not Real</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Layout style={{ height: '100%' }}>
          <Header>Header</Header>
          <Content>
            <DatePicker onChange={value => this.handleChange(value)} />
            <div style={{ marginTop: 20 }}>Date: {this.state.date && this.state.date.toString()}</div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default Index