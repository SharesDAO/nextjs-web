"use client";

import React, { useState } from 'react';
import PositionTable from '@/app/ui/account/position-table';
import TradingHistoryTable from '@/app/ui/account/trading-history-table';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const [nickname, setNickname] = useState('nickname');
    const [email, setEmail] = useState('example@example.com');
    const [profile, setProfile] = useState('example link');
    const [isEditing, setIsEditing] = useState(false);

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
    };
  
    return (
      <div>
        <h1>Basic Info Section</h1>
        {isEditing ? (
          <div>
            <label>Nickname: </label>
            <input type="text" value={nickname} disabled />
            <br />
            <label>Email: </label>
            <input type="text" value={email} disabled />
            <br />
            <label>Profile: </label>
            <input type="text" value={profile} disabled />
            <br />
            <button onClick={handleSaveProfile}>Save</button>
          </div>
        ) : (
          <div>
            <label>Nickname: </label>
            <input type="text" value={nickname} disabled />
            <br />
            <label>Email: </label>
            <input type="text" value={email} disabled />
            <br />
            <label>Profile: </label>
            <input type="text" value={profile} disabled />
            <br />
            <button onClick={handleEditProfile}>Edit</button>
          </div>
        )}
        <h1>Current Position</h1>
        <PositionTable accountid={"123"} />
        <h1>Trading History</h1>
        <TradingHistoryTable accountid={"123"} />
      </div>
    );
}
