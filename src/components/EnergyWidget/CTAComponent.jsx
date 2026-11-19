import React, { useState } from 'react';
import { Sun, Send, CheckCircle, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CTAComponent = ({ onFormSubmit }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'on-grid',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiData = {
        empresa: formData.company,
        contacto_nombre: formData.name,
        contacto_email: formData.email,
        telefono: formData.phone || null,
        mensaje: formData.message || null,
        sector: formData.projectType ? `Energía Solar (${formData.projectType})` : 'Energía Solar',
        fuente_trafico: 'web-energy'
      };

      const BACKEND_URL = import.meta.env.PUBLIC_BACKEND_URL;

      let result = null;
      if (BACKEND_URL && BACKEND_URL.includes('script.google.com')) {
        await fetch(BACKEND_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData)
        });
        result = { success: true, message: 'Google Apps Script submission complete' };
      } else {
        const response = await fetch(`${BACKEND_URL}/api/diagnostico/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Error al enviar solicitud');
        }

        result = await response.json();
      }

      if (onFormSubmit) {
        onFormSubmit(result);
      }

      setIsSubmitted(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Un especialista en transición solar y Ley 1715 te contactará en menos de 24 horas.",
      });

      setTimeout(() => {
        setIsFormOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: 'on-grid',
          message: ''
        });
      }, 2500);

    } catch (error) {
      console.error('Error submitting energy form:', error);
      toast({
        title: "Error al enviar",
        description: error.message || "Por favor, inténtalo de nuevo en unos minutos.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.company && formData.email;

  if (!isFormOpen) {
    return (
      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/10 rounded-full transform -translate-x-16 translate-y-16 pointer-events-none" />

        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <Sun className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            ¿Listo para reducir su factura energética y acceder a incentivos UPME?
          </h2>

          <p className="text-amber-50 mb-8 max-w-xl mx-auto leading-relaxed">
            Obtenga un Diagnóstico Energético Exprés de 14 días para evaluar el potencial solar de su planta, cuantificar el ahorro en factura y preparar su trámite ante la UPME (Ley 1715).
          </p>

          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border border-amber-200"
          >
            <Sun className="w-5 h-5 mr-2 text-amber-600" />
            Solicitar Diagnóstico Energético
          </Button>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Diagnóstico de 14 días</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Incentivos Ley 1715</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-amber-200 shadow-xl">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mx-auto mb-4">
          {isSubmitted ? (
            <CheckCircle className="w-6 h-6 text-amber-600" />
          ) : (
            <Send className="w-6 h-6 text-amber-600" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {isSubmitted ? "¡Solicitud Enviada!" : "Solicitar Diagnóstico Energético Exprés (Ley 1715)"}
        </h3>
        <p className="text-gray-600 text-sm">
          {isSubmitted 
            ? "Nos pondremos en contacto contigo pronto" 
            : "Completa el formulario para estructurar el estudio de viabilidad solar y beneficios fiscales"
          }
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre y cargo"
                required
                className="w-full focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Empresa o Planta Industrial *
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nombre de la empresa"
                required
                className="w-full focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo corporativo *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="contacto@empresa.com"
                required
                className="w-full focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono de contacto
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+57 300 000 0000"
                className="w-full focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Proyecto Solar de Interés
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="on-grid">Proyecto Solar On-Grid (Conectado a Red — CREG 030)</option>
              <option value="off-grid">Proyecto Solar Off-Grid (Aislado / Baterías — NTC 2050)</option>
              <option value="auditoria-upme">Auditoría Energética e Incentivos UPME (Ley 1715)</option>
              <option value="otro">Otro / Diagnóstico Integral</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Detalles sobre consumo u objetivos
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Cuéntanos sobre tu consumo energético actual, tipo de instalación y objetivos de ahorro..."
              rows={3}
              className="w-full focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsFormOpen(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Solicitud
                </>
              )}
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-gray-700 font-medium">
            Tu solicitud ha sido radicada correctamente con código de seguimiento para el módulo de Energía Solar.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Un consultor PMO se comunicará en un plazo máximo de 24 horas.
          </p>
        </div>
      )}
    </div>
  );
};

export default CTAComponent;
