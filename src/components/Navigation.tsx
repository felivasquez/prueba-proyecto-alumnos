
import React from 'react';
import { Home, Users, BookOpen, GraduationCap, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'alumnos', label: 'Oficina de Alumnos', icon: Users },
    { id: 'cursos', label: 'Gestión cursos', icon: BookOpen },
    { id: 'academico', label: 'Gestión Académica', icon: GraduationCap },
    { id: 'usuarios', label: 'Administración de usuarios', icon: Shield },
    { id: 'configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <nav className="bg-blue-700 border-b border-blue-600">
      <div className="container mx-auto">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={`flex items-center space-x-2 whitespace-nowrap px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-white text-blue-800 shadow-sm'
                    : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                }`}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
