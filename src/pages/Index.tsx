
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import StudentManagement from '@/components/StudentManagement';
import CourseManagement from '@/components/CourseManagement';
import AcademicManagement from '@/components/AcademicManagement';
import UserManagement from '@/components/UserManagement';
import Settings from '@/components/Settings';

const Index = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [userName] = useState('Administrador');

  const handleLogout = () => {
    console.log('Cerrando sesión...');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Dashboard />;
      case 'alumnos':
        return <StudentManagement />;
      case 'cursos':
        return <CourseManagement />;
      case 'academico':
        return <AcademicManagement />;
      case 'usuarios':
        return <UserManagement />;
      case 'configuracion':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName={userName} onLogout={handleLogout} />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
