import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseAssetList = () => {
  const [assetList, setAssetList] = useState<string[]>([]);
  const [loader, setLoader] = useState(true);

  const getAssetList = async () => {
    try {
      setLoader(true);
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%201y`;
      const res = await axios.get(url);
      setAssetList(res?.data);
    } catch (err) {
      console.log('err', err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getAssetList();
  }, []);

  return { loader, assetList, setAssetList, getAssetList };
};

export default UseAssetList;
