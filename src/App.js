import React, { Component } from 'react'
import './App.css';
import Routes from './routes/routes';
import Layout from './components/Layout/Layout'
import NavigationBar from './components/NavigationBar/NavigationBar'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar>
          <Layout>
            <>
              <main>
                <Routes />
              </main>
            </>
          </Layout>
        </NavigationBar>
      </React.Fragment>
    )
  }
}

export default App;
