
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Upload, Download, Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Configuración del Sistema</h1>
        <p className="text-gray-600">
          Migración de datos, configuraciones generales y herramientas de administración.
        </p>
      </div>

      {/* Migración de datos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="h-5 w-5 mr-2" />
            Migración de Datos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Migración Semi-automática</h3>
              <p className="text-sm text-gray-600">
                Analiza y transforma datos digitales (planillas) para cargarlos en la base de datos.
              </p>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <Upload className="h-4 w-4" />
                <span>Cargar Planillas Digitales</span>
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Migración Manual</h3>
              <p className="text-sm text-gray-600">
                Los operadores cargan datos desde planillas en papel mediante un panel con codificación automática.
              </p>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                <SettingsIcon className="h-4 w-4" />
                <span>Panel de Carga Manual</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuraciones del sistema */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuraciones Generales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded">
                <span className="font-medium">Año Lectivo Actual</span>
                <span className="text-blue-600">2024</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded">
                <span className="font-medium">Período de Inscripción</span>
                <span className="text-green-600">Activo</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded">
                <span className="font-medium">Cupo Máximo por Curso</span>
                <span className="text-gray-900">30</span>
              </div>
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded">
                <span className="font-medium">Backup Automático</span>
                <span className="text-green-600">Habilitado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Herramientas de Administración</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-2 p-3 border border-gray-200 rounded hover:bg-gray-50">
                <Download className="h-4 w-4 text-blue-600" />
                <span>Exportar Base de Datos</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 border border-gray-200 rounded hover:bg-gray-50">
                <Upload className="h-4 w-4 text-green-600" />
                <span>Importar Datos</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 border border-gray-200 rounded hover:bg-gray-50">
                <SettingsIcon className="h-4 w-4 text-purple-600" />
                <span>Configurar Permisos</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 border border-gray-200 rounded hover:bg-gray-50">
                <Database className="h-4 w-4 text-orange-600" />
                <span>Mantenimiento de BD</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
