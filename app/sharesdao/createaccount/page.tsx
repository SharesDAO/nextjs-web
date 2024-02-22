"use client";

import React, { useState } from 'react';

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

    const handleSaveProfile = () => {
        setIsEditing(false);
    };
  
    return (
      <div>
        <h1>Basic Info Section</h1>
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
      </div>
    );
}
