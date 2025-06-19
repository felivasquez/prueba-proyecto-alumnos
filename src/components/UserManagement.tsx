
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, UserPlus, Users, Settings, Key } from 'lucide-react';

const UserManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Administración de Usuarios</h1>
        <p className="text-gray-600">
          Gestión de usuarios del sistema, roles, permisos y configuración de contraseñas.
        </p>
      </div>

      {/* Acciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <UserPlus className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Crear Usuario</h3>
            <p className="text-sm text-gray-600">Alta de nuevos usuarios con roles</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Settings className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Modificar Usuario</h3>
            <p className="text-sm text-gray-600">Actualizar datos y permisos</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Gestionar Permisos</h3>
            <p className="text-sm text-gray-600">Roles y accesos del sistema</p>
          </CardContent>
        </Card>
      </div>

      {/* Información de usuarios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Usuarios por Rol
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Administradores:</span>
                <span className="font-semibold bg-red-100 text-red-800 px-2 py-1 rounded">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Docentes:</span>
                <span className="font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estudiantes:</span>
                <span className="font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">423</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Personal Administrativo:</span>
                <span className="font-semibold bg-purple-100 text-purple-800 px-2 py-1 rounded">8</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Key className="h-5 w-5 mr-2" />
              Seguridad de Contraseñas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <div className="font-medium text-yellow-800">Próximas a Vencer</div>
                <div className="text-sm text-yellow-600">12 usuarios deben cambiar contraseña</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Requisitos de Contraseña:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mínimo una mayúscula</li>
                  <li>• Mínimo una minúscula</li>
                  <li>• Un número (no consecutivo)</li>
                  <li>• Un carácter especial</li>
                  <li>• Cambio cada 6 meses</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
