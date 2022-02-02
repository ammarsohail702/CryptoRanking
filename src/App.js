import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import { Navbar, Homepage, CryptoCurrencies, CryptoDetails, News, Exchanges } from './components';
import './App.css';

const App = () => {
  return (
  <div className='app'>
    <div className="navbar">
    <Navbar/>
    </div>
    <div className="main">
        <Layout>
          <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route exact path="/cryptocurrencies">
              <CryptoCurrencies/>
            </Route>
            <Route exact path="/exchanges">
              <Exchanges/>
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails/>
            </Route>
            <Route exact path="/latest-news">
              <News/>
            </Route> 
          </Switch>
          </div>
        </Layout>

      
    
    <div className="footer">
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center' }}>CryptoRanking <br/> All rights Reserved by Muhammad Ammar Rana</Typography.Title>
            <Space>
              <Link to='/'>Homepage</Link>
              <Link to='/cryptocurrencies'>Crypto Currencies</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/latest-news'>Crypto Latest News</Link>

            </Space>
    </div>
</div>
  </div>
  )
};

export default App;
