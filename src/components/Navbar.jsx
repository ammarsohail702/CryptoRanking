import React from 'react';
import {Button, Avatar, Typography, Menu} from 'antd';
import {MoneyCollectOutlined, HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

      <div className="nav-container">
        <div className="logo-container">
            <Avatar/>
            <Typography.Title level={2}>
                <Link to="/">CryptRanking</Link>
                </Typography.Title>

        </div>
        <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/latest-news">News</Link>
        </Menu.Item>
        </Menu>

      </div>
      

  );

};

export default Navbar;
