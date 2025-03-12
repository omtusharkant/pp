"use client";
import React, { useState, useEffect } from 'react';
import LoadingS from "@/app/loading";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
      handler(() => {
        setLoading(false);
      });
    }
  }, []);

  return loading ? <LoadingS /> : <main className="bg-black pt-16">{children}</main>;
};

export default ClientWrapper; 