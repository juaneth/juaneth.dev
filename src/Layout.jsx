import { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  return (
    <>
      <Analytics></Analytics>
      <div className='flex flex-col min-h-screen'>
        <div className='grow'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
