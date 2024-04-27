import { useState } from "react";

import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='grow'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
