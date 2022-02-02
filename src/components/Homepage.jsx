import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCoinsQuery } from '../services/CryptoApi';
import CryptoCurrencies from './CryptoCurrencies';

const {Title} = Typography;
const Homepage = () => {
    const {data, isFetching}= useGetCoinsQuery(10);
    const globalstats= data?.data?.stats;
    
    if(isFetching) return "Loading...."

  return <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
      <Col span={12}><Statistic title="Total Crypto Currencies" value={globalstats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalstats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalstats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalstats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalstats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
          <Title level={2} className="home-title">Top Crypto Currencies in the world</Title>
          <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified={true}/>
  </>;

};

export default Homepage;
