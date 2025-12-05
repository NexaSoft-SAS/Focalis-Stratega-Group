import React, { useState } from 'react';
import { Rocket, Send, CheckCircle, Loader } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';

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
      // Prepare data for backend API
      const apiData = {
        empresa: formData.company,
        contacto_nombre: formData.name,
        contacto_email: formData.email,
        telefono: formData.phone || null,
        mensaje: formData.message || null,
        sector: null, // Can be extended later
        fuente_trafico: 'web'
      };

      // Get backend URL from environment
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      
      // Send to backend API
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

      const result = await response.json();
      
      // Call parent handler if provided
      if (onFormSubmit) {
        onFormSubmit(result);
      }

      setIsSubmitted(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo en máximo 24 horas.",
      });

      // Reset form after success
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
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
      <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-8 rounded-2xl text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
        
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 backdrop-blur-sm">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">¿Listo para el cambio sostenible?</h2>
          <p className="text-emerald-100 mb-8 max-w-md mx-auto">
            Obtén un diagnóstico personalizado de tu huella de carbono y descubre cómo reducir costos mientras mejoras tu impacto ambiental.
          </p>
          
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Solicitar Diagnóstico Verde
          </Button>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Análisis gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mx-auto mb-4">
          {isSubmitted ? (
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          ) : (
            <Send className="w-6 h-6 text-emerald-600" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {isSubmitted ? "¡Solicitud Enviada!" : "Solicitar Diagnóstico Verde"}
        </h3>
        <p className="text-gray-600 text-sm">
          {isSubmitted 
            ? "Nos pondremos en contacto contigo pronto" 
            : "Completa el formulario para recibir tu análisis personalizado"
          }
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Tu nombre"
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Empresa *
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nombre de la empresa"
                required
                className="w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@empresa.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+34 600 000 000"
                className="w-full"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje adicional
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Cuéntanos sobre tus objetivos de sostenibilidad..."
              rows={3}
              className="w-full"
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
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
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
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <p className="text-gray-600">
            Tu solicitud ha sido enviada correctamente. Te contactaremos en las próximas 24 horas.
          </p>
        </div>
      )}
    </div>
  );
};

export default CTAComponent;