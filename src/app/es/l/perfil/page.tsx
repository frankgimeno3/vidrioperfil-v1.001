"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import UpdateEmailForm from '@/app/ui-components/profile/update-email-form';
import UpdatePasswordForm from '@/app/ui-components/profile/update-password-form';
import UpdateProfileForm from '@/app/ui-components/profile/update-profile-form';
import React, { FC, useState } from 'react';

interface PerfilProps {

}

const Perfil: FC<PerfilProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('')

  return (
    <div>
      <TopNav isLoggedIn={true} />
      <FixedNav sectionSelected={sectionSelected}/>
      <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className={` text-2xl`}>Profile Settings</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <UpdateProfileForm />
        <UpdatePasswordForm />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        <UpdateEmailForm />
      </div>
    </main>
    </div>
  );
};

export default Perfil;