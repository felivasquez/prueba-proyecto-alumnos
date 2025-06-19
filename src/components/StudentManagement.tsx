
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserPlus, Search, FileText, RotateCcw, Edit } from 'lucide-react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

const StudentManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo
  const students = [
    { id: 1, nombre: 'Juan Pérez', dni: '12345678', idRol: 2, idGrupo: 6 },
    { id: 2, nombre: 'María González', dni: '87654321', idRol: 2, idGrupo: 7 },
    { id: 3, nombre: 'Carlos Rodríguez', dni: '11223344', idRol: 5, idGrupo: 8 },
  ];

  const filteredStudents = students.filter(student =>
    student.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.dni.includes(searchTerm)
  );

  if (showForm) {
    return <StudentForm onClose={() => setShowForm(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header con título y descripción */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Oficina de Alumnos</h1>
        <p className="text-gray-600">
          Gestión completa de estudiantes: inscripciones, reinscripciones, actualización de datos y generación de pases.
        </p>
      </div>

      {/* Acciones principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setShowForm(true)}>
          <CardContent className="p-6 text-center">
            <UserPlus className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Nueva Inscripción</h3>
            <p className="text-sm text-gray-600">Registrar nuevo estudiante</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <RotateCcw className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Reinscripción</h3>
            <p className="text-sm text-gray-600">Actualizar inscripción anual</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Edit className="h-12 w-12 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Actualizar Datos</h3>
            <p className="text-sm text-gray-600">Modificar información personal</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Generar Pase</h3>
            <p className="text-sm text-gray-600">Documentos de transferencia</p>
          </CardContent>
        </Card>
      </div>

      {/* Búsqueda y filtros */}
      <Card>
        <CardHeader>
          <CardTitle>Buscar Estudiantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por nombre o DNI..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de estudiantes */}
      <StudentTable students={filteredStudents} />
    </div>
  );
};

export default StudentManagement;
