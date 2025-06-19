
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus, Save, X } from 'lucide-react';
import { toast } from 'sonner';

interface StudentFormProps {
  onClose?: () => void;
}

const StudentForm = ({ onClose }: StudentFormProps) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: '',
    tutor: '',
    telefonoTutor: '',
    grupo: '',
    rol: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar campos requeridos
    if (!formData.nombre || !formData.apellido || !formData.dni) {
      toast.error('Por favor complete los campos obligatorios');
      return;
    }
    
    toast.success('Usuario agregado exitosamente');
    console.log('Formulario enviado:', formData);
    onClose?.();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-blue-800">
            <UserPlus className="mr-2 h-5 w-5" />
            Agregar Usuario
          </CardTitle>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Datos Personales */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Datos Personales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-sm font-medium">
                  Nombre *
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                  placeholder="Ingrese el nombre"
                  className="w-full"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apellido" className="text-sm font-medium">
                  Apellido *
                </Label>
                <Input
                  id="apellido"
                  type="text"
                  value={formData.apellido}
                  onChange={(e) => handleInputChange('apellido', e.target.value)}
                  placeholder="Ingrese el apellido"
                  className="w-full"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dni" className="text-sm font-medium">
                  DNI *
                </Label>
                <Input
                  id="dni"
                  type="text"
                  value={formData.dni}
                  onChange={(e) => handleInputChange('dni', e.target.value)}
                  placeholder="Ingrese el DNI"
                  className="w-full"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Ingrese el email"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-sm font-medium">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => handleInputChange('telefono', e.target.value)}
                  placeholder="Ingrese el teléfono"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento" className="text-sm font-medium">
                  Fecha de Nacimiento
                </Label>
                <Input
                  id="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={(e) => handleInputChange('fechaNacimiento', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <Label htmlFor="direccion" className="text-sm font-medium">
                Dirección
              </Label>
              <Input
                id="direccion"
                type="text"
                value={formData.direccion}
                onChange={(e) => handleInputChange('direccion', e.target.value)}
                placeholder="Ingrese la dirección completa"
                className="w-full mt-2"
              />
            </div>
          </div>

          {/* Datos del Tutor */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Datos del Tutor/Responsable</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tutor" className="text-sm font-medium">
                  Nombre del Tutor
                </Label>
                <Input
                  id="tutor"
                  type="text"
                  value={formData.tutor}
                  onChange={(e) => handleInputChange('tutor', e.target.value)}
                  placeholder="Ingrese el nombre del tutor"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="telefonoTutor" className="text-sm font-medium">
                  Teléfono del Tutor
                </Label>
                <Input
                  id="telefonoTutor"
                  type="tel"
                  value={formData.telefonoTutor}
                  onChange={(e) => handleInputChange('telefonoTutor', e.target.value)}
                  placeholder="Ingrese el teléfono del tutor"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Configuración del Sistema */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuración del Sistema</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="grupo" className="text-sm font-medium">
                  Seleccionar grupo...
                </Label>
                <Select onValueChange={(value) => handleInputChange('grupo', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar grupo..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">Grupo 6</SelectItem>
                    <SelectItem value="7">Grupo 7</SelectItem>
                    <SelectItem value="8">Grupo 8</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rol" className="text-sm font-medium">
                  Seleccionar rol...
                </Label>
                <Select onValueChange={(value) => handleInputChange('rol', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar rol..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">Estudiante</SelectItem>
                    <SelectItem value="5">Docente</SelectItem>
                    <SelectItem value="7">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            )}
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" />
              Agregar Usuario
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentForm;
