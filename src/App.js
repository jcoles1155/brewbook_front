import React, { Component } from 'react'
import './App.css';
import Routes from './routes/routes';
import Layout from './components/Layout/Layout'
import Jumbotron from './components/Jumbotron/Jumbotron'
import NavigationBar from './components/NavigationBar/NavigationBar'


class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Jumbotron />
          <Layout>
            <>
              <main>
                <Routes />
              </main>
            </>
          </Layout>
      </>
    )
  }
}

export default App;
