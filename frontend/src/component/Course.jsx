import React from 'react';
import { useParams } from 'react-router-dom';

export default function Course() {
  const { cname } = useParams();

  return (
    <>
      <h1>Hello {cname}</h1>
    </>
  );
}
