'use client';
import React from 'react'

import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const ToastBuySuccess = () => {
    const searchParams = useSearchParams();
    const show = searchParams?.get('success');

    useEffect(() => {
        

        if (show) {
            toast.success('Su compra ha sido realizada');
        }

    }, [show]);



  return (
    <>
    </>
  )
}

export default ToastBuySuccess