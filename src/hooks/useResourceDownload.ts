
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  type: string;
  fileUrl: string;
  fileName: string;
  size?: string;
}

export const useResourceDownload = () => {
  const [downloading, setDownloading] = useState<string | null>(null);
  const { toast } = useToast();

  const downloadResource = async (resource: DownloadableResource) => {
    setDownloading(resource.id);
    
    try {
      // Simulate download preparation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create blob content based on resource type
      let content = '';
      let mimeType = 'text/plain';
      
      switch (resource.id) {
        case 'roi-calculator':
          content = generateROICalculatorContent();
          mimeType = 'text/html';
          break;
        case 'implementation-checklist':
          content = generateImplementationChecklistContent();
          mimeType = 'text/plain';
          break;
        case 'competitor-analysis':
          content = generateCompetitorAnalysisContent();
          mimeType = 'text/csv';
          break;
        default:
          content = `Contenido del recurso: ${resource.title}\n\n${resource.description}`;
      }
      
      // Create and trigger download
      const blob = new Blob([content], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resource.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Descarga exitosa",
        description: `${resource.title} se ha descargado correctamente.`,
      });
      
    } catch (error) {
      toast({
        title: "Error en la descarga",
        description: "No se pudo descargar el recurso. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setDownloading(null);
    }
  };

  return { downloadResource, downloading };
};

const generateROICalculatorContent = () => {
  return `<!DOCTYPE html>
<html>
<head>
    <title>ROI Calculator WhatsApp BOT</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .calculator { max-width: 600px; margin: 0 auto; }
        .input-group { margin: 15px 0; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
        button { background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        .result { background: #f0f9ff; padding: 15px; border-radius: 4px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="calculator">
        <h1>Calculadora ROI WhatsApp BOT</h1>
        <div class="input-group">
            <label>Mensajes mensuales actuales:</label>
            <input type="number" id="messages" placeholder="Ej: 1000">
        </div>
        <div class="input-group">
            <label>Costo por agente (USD/mes):</label>
            <input type="number" id="agentCost" placeholder="Ej: 800">
        </div>
        <div class="input-group">
            <label>Número de agentes:</label>
            <input type="number" id="agents" placeholder="Ej: 3">
        </div>
        <div class="input-group">
            <label>Costo del BOT (USD/mes):</label>
            <input type="number" id="botCost" placeholder="Ej: 200" value="200">
        </div>
        <button onclick="calculateROI()">Calcular ROI</button>
        <div id="result" class="result" style="display:none;"></div>
    </div>
    <script>
        function calculateROI() {
            const messages = document.getElementById('messages').value;
            const agentCost = document.getElementById('agentCost').value;
            const agents = document.getElementById('agents').value;
            const botCost = document.getElementById('botCost').value;
            
            const currentCost = agentCost * agents;
            const savings = currentCost - botCost;
            const roi = ((savings / botCost) * 100).toFixed(2);
            
            document.getElementById('result').innerHTML = \`
                <h3>Resultados del ROI:</h3>
                <p><strong>Costo actual:</strong> $\${currentCost}/mes</p>
                <p><strong>Costo con BOT:</strong> $\${botCost}/mes</p>
                <p><strong>Ahorro mensual:</strong> $\${savings}/mes</p>
                <p><strong>ROI:</strong> \${roi}%</p>
                <p><strong>Ahorro anual:</strong> $\${savings * 12}</p>
            \`;
            document.getElementById('result').style.display = 'block';
        }
    </script>
</body>
</html>`;
};

const generateImplementationChecklistContent = () => {
  return `CHECKLIST DE IMPLEMENTACIÓN WHATSAPP BOT
===========================================

□ PREPARACIÓN INICIAL
  □ Verificar cuenta de WhatsApp Business
  □ Obtener acceso a WhatsApp Business API
  □ Configurar webhook URL
  □ Generar token de acceso

□ CONFIGURACIÓN TÉCNICA
  □ Instalar dependencias necesarias
  □ Configurar servidor webhook
  □ Implementar verificación de webhook
  □ Configurar variables de entorno

□ DISEÑO DEL BOT
  □ Definir flujos de conversación
  □ Crear respuestas automáticas
  □ Configurar palabras clave
  □ Diseñar menú interactivo

□ CONFIGURACIÓN DE MENSAJES
  □ Crear plantillas de mensajes
  □ Configurar respuestas rápidas
  □ Establecer horarios de atención
  □ Configurar mensajes de ausencia

□ INTEGRACIÓN CRM
  □ Conectar con base de datos
  □ Configurar sincronización de contactos
  □ Establecer etiquetas y categorías
  □ Configurar seguimiento de leads

□ PRUEBAS
  □ Probar flujos de conversación
  □ Verificar respuestas automáticas
  □ Testear integración con CRM
  □ Validar webhooks

□ LANZAMIENTO
  □ Configurar número de WhatsApp Business
  □ Activar BOT en producción
  □ Capacitar al equipo
  □ Monitorear métricas iniciales

□ POST-LANZAMIENTO
  □ Revisar analíticas semanalmente
  □ Optimizar respuestas del BOT
  □ Actualizar flujos según feedback
  □ Expandir funcionalidades

NOTAS IMPORTANTES:
- Mantener backup de configuraciones
- Documentar todos los cambios
- Revisar políticas de WhatsApp regularmente
- Capacitar al equipo en el uso del sistema`;
};

const generateCompetitorAnalysisContent = () => {
  return `Empresa,Usa WhatsApp Business,Tiene BOT,Tiempo de Respuesta,Horario de Atención,Funcionalidades Principales,Calidad de Respuestas,Integración CRM,Notas
Competidor 1,Sí,Sí,< 5 min,24/7,Menu interactivo - Cotizaciones - Soporte,Excelente,Sí,Bot muy completo
Competidor 2,Sí,No,30-60 min,9am-6pm,Solo respuestas manuales,Buena,No,Respuestas lentas
Competidor 3,Sí,Sí,10-15 min,8am-8pm,FAQ automáticas - Citas,Regular,Parcial,Bot básico
Competidor 4,No,No,2-3 horas,9am-5pm,Email y teléfono únicamente,Regular,No,Sin presencia en WhatsApp
Competidor 5,Sí,Sí,< 2 min,24/7,Bot completo - Pagos - Tracking,Excelente,Sí,Líder en automatización

ANÁLISIS RESUMIDO:
=================

OPORTUNIDADES IDENTIFICADAS:
- 60% de competidores usa WhatsApp Business
- Solo 40% tiene BOT implementado
- Tiempos de respuesta variables (2 min - 3 horas)
- Integración CRM limitada en la mayoría

VENTAJAS COMPETITIVAS POTENCIALES:
- Implementar BOT más rápido que competidores sin automatización
- Ofrecer respuestas instantáneas vs competidores lentos
- Integración CRM completa
- Disponibilidad 24/7

RECOMENDACIONES:
- Enfocarse en tiempo de respuesta < 1 minuto
- Desarrollar funcionalidades que competidores no tienen
- Destacar integración CRM en marketing
- Monitorear constantemente a Competidor 5 (líder)`;
};
