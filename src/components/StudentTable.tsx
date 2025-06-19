
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Eye, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Student {
  id: number;
  nombre: string;
  dni: string;
  idRol: number;
  idGrupo: number;
  contraseña?: string;
}

interface StudentTableProps {
  students: Student[];
  onEdit?: (student: Student) => void;
  onDelete?: (id: number) => void;
  onViewProfile?: (student: Student) => void;
}

const StudentTable = ({ students, onEdit, onDelete, onViewProfile }: StudentTableProps) => {
  const getRoleName = (idRol: number) => {
    switch (idRol) {
      case 2: return 'Estudiante';
      case 5: return 'Docente';
      case 7: return 'Administrador';
      default: return 'Sin definir';
    }
  };

  const getRoleBadgeColor = (idRol: number) => {
    switch (idRol) {
      case 2: return 'bg-blue-100 text-blue-800';
      case 5: return 'bg-green-100 text-green-800';
      case 7: return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Lista de Usuarios ({students.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <th className="px-4 py-3 text-left text-sm font-medium">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-medium">DNI</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Rol</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Grupo</th>
                <th className="px-4 py-3 text-center text-sm font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr 
                  key={student.id} 
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {student.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {student.nombre}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-mono">
                    {student.dni}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <Badge className={getRoleBadgeColor(student.idRol)}>
                      {getRoleName(student.idRol)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {student.idGrupo}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex justify-center space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onViewProfile?.(student)}
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onEdit?.(student)}
                        className="text-green-600 hover:text-green-800 hover:bg-green-100"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onDelete?.(student.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-purple-600 hover:text-purple-800 hover:bg-purple-100"
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {students.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No hay usuarios registrados
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentTable;
