import React, { useState } from 'react';
import { Home, Compass, PlusSquare, User, Settings, LogOut } from 'lucide-react';

const MainLayout = ({ children, onOpenUpload }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* SIDEBAR GAUCHE - Navigation Fixe */}
      <aside className="w-64 border-r border-gray-100 flex flex-col p-6 sticky top-0 h-screen">
        <h1 className="text-2xl font-black tracking-tighter mb-10 text-blue-600">BEN'ART</h1>
        
        <nav className="flex-1 space-y-4">
          <NavItem icon={<Home />} label="Accueil" active />
          <NavItem icon={<Compass />} label="Découvrir" />
          <button onClick={onOpenUpload} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-slate-700 font-semibold transition-all">
            <PlusSquare className="text-blue-500" />
            <span>Créer</span>
          </button>
          <NavItem icon={<User />} label="Profil" />
        </nav>

        <div className="border-t pt-6 space-y-4">
          <NavItem icon={<Settings />} label="Paramètres" />
          <NavItem icon={<LogOut />} label="Déconnexion" color="text-red-500" />
        </div>
      </aside>

      {/* ZONE DE CONTENU PRINCIPAL */}
      <main className="flex-1 bg-gray-50/50">
        {children}
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active, color = "text-slate-700" }) => (
  <div className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-blue-50 text-blue-600' : `hover:bg-gray-50 ${color}`}`}>
    {icon}
    <span className="font-semibold">{label}</span>
  </div>
);