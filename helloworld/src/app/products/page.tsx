import React from 'react'
import Link from 'next/link';

export default function productlist() {
  const productId = 100;
  return (
    <>
    <Link href="/">Home</Link>
    <h1>product list</h1>
    <h2>
      <Link href="/products/1"> Product1 </Link>
    </h2>
    <h2>
    <Link href="/products/2"> Product2 </Link>
    </h2>
    <h2>
    <Link href={`/products/${productId}`}> Product{productId}</Link>
    </h2>
    </>
     
  );
}
