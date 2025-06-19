
import React from 'react';
import { Users, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  userName?: string;
  onLogout?: () => void;
}

const Header = ({ userName = "@usuario", onLogout }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2 rounded-lg">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">E.E.S.T N°4</h1>
              <p className="text-blue-100 text-sm">Sistema de Administración de Alumnos</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
              <User className="h-4 w-4" />
              <span className="text-sm">Hola, {userName}</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onLogout}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
