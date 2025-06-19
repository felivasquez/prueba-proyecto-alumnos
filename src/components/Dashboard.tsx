
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, GraduationCap, Award, TrendingUp, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Alumnos',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Cursos Activos',
      value: '45',
      change: '+5%',
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      title: 'Egresados',
      value: '856',
      change: '+8%',
      icon: GraduationCap,
      color: 'bg-purple-500'
    },
    {
      title: 'Promedio General',
      value: '7.8',
      change: '+0.3',
      icon: Award,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    { action: 'Nuevo alumno inscrito', student: 'Juan Pérez', time: 'Hace 2 horas' },
    { action: 'Calificaciones cargadas', student: 'Curso 3°A', time: 'Hace 4 horas' },
    { action: 'Pase generado', student: 'María González', time: 'Hace 1 día' },
    { action: 'Plan de estudio actualizado', student: 'Especialidad Informática', time: 'Hace 2 días' }
  ];

  return (
    <div className="space-y-6">
      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actividad Reciente */}
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.student}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accesos Rápidos */}
        <Card>
          <CardHeader>
            <CardTitle>Accesos Rápidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Inscribir Alumno</h3>
                <p className="text-sm text-gray-600">Registrar nuevo estudiante</p>
              </button>
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Crear Curso</h3>
                <p className="text-sm text-gray-600">Nuevo curso académico</p>
              </button>
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                <GraduationCap className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Cargar Notas</h3>
                <p className="text-sm text-gray-600">Registrar calificaciones</p>
              </button>
              <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors">
                <Award className="h-8 w-8 text-orange-600 mb-2" />
                <h3 className="font-semibold text-gray-900">Generar Pase</h3>
                <p className="text-sm text-gray-600">Documentación de transferencia</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Información de la Escuela */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Escuela Técnica N° 4 Prof. Ricardo A. López</h2>
            <p className="text-blue-100">Sistema Integral de Gestión Académica</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Ubicación:</strong> [Dirección de la escuela]
              </div>
              <div>
                <strong>Desarrollado por:</strong> Equipo de Desarrollo
              </div>
              <div>
                <strong>Versión:</strong> 2.0.1
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
