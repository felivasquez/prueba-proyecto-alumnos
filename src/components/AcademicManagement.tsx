
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, FileCheck, Star, TrendingUp, Book } from 'lucide-react';

const AcademicManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestión Académica</h1>
        <p className="text-gray-600">
          Administración de planes de estudio, calificaciones, verificación de egreso y seguimiento de trayectorias.
        </p>
      </div>

      {/* Acciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Book className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Planes de Estudio</h3>
            <p className="text-sm text-gray-600">Agrupar materias por curso</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Star className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Cargar Notas</h3>
            <p className="text-sm text-gray-600">Calificaciones por materia</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <FileCheck className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Verificar Egreso</h3>
            <p className="text-sm text-gray-600">Revisar requisitos de titulación</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Trayectoria</h3>
            <p className="text-sm text-gray-600">Seguimiento académico</p>
          </CardContent>
        </Card>
      </div>

      {/* Información académica */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              Resumen Académico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Alumnos Regulares:</span>
                <span className="font-semibold text-green-600">387</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Deben Recursar:</span>
                <span className="font-semibold text-orange-600">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Próximos a Egresar:</span>
                <span className="font-semibold text-blue-600">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Egresados este Año:</span>
                <span className="font-semibold text-purple-600">67</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Planes Específicos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <div className="font-medium text-yellow-800">Planes Pendientes</div>
                <div className="text-sm text-yellow-600">12 alumnos requieren plan específico</div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <div className="font-medium text-blue-800">Planes Generados</div>
                <div className="text-sm text-blue-600">34 planes automáticos creados</div>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <div className="font-medium text-green-800">Planes Completados</div>
                <div className="text-sm text-green-600">156 alumnos finalizaron su plan</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicManagement;
