
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Calendar, Plus } from 'lucide-react';

const CourseManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestión de Cursos</h1>
        <p className="text-gray-600">
          Creación de cursos, asignación de alumnos y gestión de cupos disponibles.
        </p>
      </div>

      {/* Acciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Plus className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Crear Curso</h3>
            <p className="text-sm text-gray-600">Nuevo curso vinculado a plan de estudios</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Asignar Alumnos</h3>
            <p className="text-sm text-gray-600">Vincular estudiantes según cupos</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Sorteo Automático</h3>
            <p className="text-sm text-gray-600">Cuando no hay cupos disponibles</p>
          </CardContent>
        </Card>
      </div>

      {/* Información de cursos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Cursos Activos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">1° Año - Informática</span>
                <span className="text-sm text-gray-600">25/30 alumnos</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">2° Año - Electrónica</span>
                <span className="text-sm text-gray-600">28/30 alumnos</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">3° Año - Mecánica</span>
                <span className="text-sm text-gray-600">30/30 alumnos</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estadísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total de Cursos:</span>
                <span className="font-semibold">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Alumnos Asignados:</span>
                <span className="font-semibold">423</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cupos Disponibles:</span>
                <span className="font-semibold">27</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lista de Espera:</span>
                <span className="font-semibold">12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseManagement;
