"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import Table from '@/app/ui/invoices/stock-detail-table';
import { useState } from 'react';

const DynamicLineChart = dynamic(() => import('@/app/ui/invoices/LineChart'), {
  ssr: false // 设置 ssr 为 false，以确保只在客户端渲染
});

const YourPage = () => {
  const data = [
    { label: 'Jan', value: 10 },
    { label: 'Feb', value: 20 },
    { label: 'Mar', value: 15 },
  ];

  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [isBuying, setIsBuying] = useState(true); // 默认是买入

  const handleToggle = () => {
    setIsBuying(prevIsBuying => !prevIsBuying);
  };

  const handleSubmit = () => {
    const tradeType = isBuying ? '买入' : '卖出';
    console.log(`价格：${price}，数量：${amount}，交易类型：${tradeType}`);
    // 这里可以添加发送交易请求的逻辑
  };

  return (
    <div>
      <h1>Past One Month Trading History</h1>
      <DynamicLineChart data={data} />
      <h1>Stock Company Introduce</h1>
      <p>Company Introduce</p>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table stock={"stock1"}/>
      </Suspense>
      <label>
        单价：
        <input
          type="text"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        价格：
        <input
          type="text"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isBuying}
          onChange={handleToggle}
        />
        {isBuying ? '买入' : '卖出'}
      </label>
      <br />
      <button onClick={handleSubmit}>确认</button>
    </div>
  );
};

export default YourPage;
