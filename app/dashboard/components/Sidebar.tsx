'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoTasklist } from 'react-icons/go';
import { RiTeamFill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

const Sidebar = () => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route);
  };
  return (
    <div className='bg-slate-200 border-e w-52 h-full'>
      <div className='px-4 pt-6 flex flex-col gap-2 '>
        <p
          className='flex flex-row gap-2 p-2 items-center tracking-wide rounded-md hover:bg-slate-300 cursor-pointer'
          onClick={() => {
            handleClick('/dashboard');
          }}
        >
          <RxDashboard /> Dashboard
        </p>
        <p
          className='flex flex-row gap-2 p-2 items-center tracking-wide rounded-md hover:bg-slate-300 cursor-pointer'
          onClick={() => {
            handleClick('/dashboard/tasks');
          }}
        >
          <GoTasklist /> Tasks
        </p>
        <p
          className='flex flex-row gap-2 p-2 items-center tracking-wide rounded-md hover:bg-slate-300 cursor-pointer'
          onClick={() => {
            handleClick('/dashboard/team');
          }}
        >
          <RiTeamFill /> Team
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
