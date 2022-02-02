import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCoinsQuery } from '../services/CryptoApi';

const CryptoCurrencies = ({simplified}) => {
    const count= simplified ? 10 : 100;
    const {data, isFetching}=useGetCoinsQuery(count);
    const [Cryptos, setCryptos]= useState(data?.data?.coins);

    if(isFetching) return 'Loading....';



  return (
        <>
            <Row gutter={[32,32]} className='crypto-card-container'>
                {Cryptos?.map((currency)=>(
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                            title={`${currency.rank}. ${currency.name}`}
                            extra={<img className='crypto-image' src={currency.iconUrl}/>}
                            hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>

                            </Card>
                        </Link>
                    </Col>
                ))

                }

            </Row>
        </>

  )
};

export default CryptoCurrencies;
