"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Page = () => {

  const params = useSearchParams();

  console.log("params", params)




  return (
    <div>page</div>
  )
}

export default Page
