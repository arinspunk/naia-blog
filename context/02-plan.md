# Plan de Acción - Modernización del Blog Naia

## Contexto

El blog Naia es un proyecto desarrollado con Nuxt 2.14.7 que actualmente enfrenta problemas de compatibilidad con las versiones modernas de Node.js (v20+). El principal problema identificado es un error de OpenSSL relacionado con algoritmos de criptografía no soportados en las versiones recientes de Node.js cuando se ejecuta el proyecto utilizando Webpack (usado internamente por Nuxt 2).

Error específico:
```
Error: error:0308010C:digital envelope routines::unsupported
```

## Objetivos del Plan

1. **Objetivo inmediato**: Permitir el desarrollo y ejecución del proyecto en entornos con Node.js moderno (v18+)
2. **Objetivo a medio plazo**: Actualizar las dependencias compatibles del proyecto para mejorar su mantenibilidad
3. **Objetivo a largo plazo**: Optimizar el rendimiento y la experiencia de desarrollo manteniendo la base de Nuxt 2

## Fases del Plan

### FASE 1: SOLUCIÓN INMEDIATA - COMPATIBILIDAD CON NODE.JS MODERNO

Esta fase se centra en hacer que el proyecto sea compatible con Node.js moderno sin realizar cambios significativos en el código o estructura.

1. **Modificar scripts para usar la configuración de OpenSSL legada**:
   - Actualizar los scripts en package.json para incluir la variable de entorno `NODE_OPTIONS='--openssl-legacy-provider'`
   - Alternativamente, utilizar `.env` o `.npmrc` para configurar esta variable globalmente para el proyecto

2. **Implementar una solución para el equipo de desarrollo**:
   - Documentar el proceso para desarrolladores que usen Node.js v18+ 
   - Crear scripts de ayuda para facilitar la configuración del entorno

3. **Verificar compatibilidad**:
   - Probar el proyecto en diferentes versiones de Node.js
   - Asegurar que la solución funciona tanto en desarrollo como en producción

### FASE 2: ACTUALIZACIÓN DE DEPENDENCIAS Y OPTIMIZACIÓN

Esta fase se centra en actualizar las dependencias no críticas y optimizar el proyecto sin cambiar su estructura fundamental.

1. **Actualizar dependencias no críticas**:
   - Identificar y actualizar dependencias que pueden actualizarse sin romper compatibilidad
   - Actualizar plugins y módulos que tienen versiones compatibles con Nuxt 2

2. **Optimización de recursos**:
   - Implementar mejoras en la carga de imágenes (considerar @nuxt/image)
   - Revisar y optimizar el rendimiento mediante herramientas modernas

3. **Mejoras de desarrollo**:
   - Implementar herramientas modernas de linting y formateo
   - Añadir scripts de utilidad para mejorar el flujo de trabajo

### FASE 3: MEJORAS AVANZADAS Y OPTIMIZACIÓN PARA NUXT 2

Esta fase se centra en implementar mejoras avanzadas manteniendo la compatibilidad con Nuxt 2.

1. **Mejora de la experiencia de desarrollo**:
   - Implementar hot reload más eficiente
   - Configurar herramientas de debugging mejoradas
   - Añadir ESLint y Prettier para mantener la calidad del código

2. **Optimización de rendimiento**:
   - Implementar lazy loading para componentes grandes
   - Optimizar la carga de recursos con técnicas modernas
   - Mejorar el tiempo de compilación y rendimiento en desarrollo

3. **Mejoras de seguridad**:
   - Actualizar las dependencias con vulnerabilidades conocidas
   - Implementar buenas prácticas de seguridad para aplicaciones web
   - Añadir validación de datos y sanitización donde sea necesario

### FASE 4: MANTENIMIENTO A LARGO PLAZO

Esta fase se centra en preparar el proyecto para un mantenimiento sostenible a largo plazo.

1. **Documentación completa**:
   - Crear documentación técnica detallada del proyecto
   - Documentar procesos de desarrollo y despliegue
   - Mantener un registro de decisiones arquitectónicas

2. **Pruebas y calidad**:
   - Implementar pruebas unitarias con Jest/Vue Test Utils
   - Añadir pruebas e2e con Cypress o similar
   - Establecer procesos de integración continua

3. **Mejora de contenido y SEO**:
   - Optimizar la estructura de contenido para mejor SEO
   - Implementar mejoras de accesibilidad
   - Añadir características avanzadas para el contenido multilingüe

## Consideraciones Importantes

1. **Preservación de la experiencia de usuario**: Durante todo el proceso, es fundamental que la experiencia y funcionalidad para el usuario final no se vean afectadas.

2. **Enfoque incremental**: Se recomienda abordar estas fases de manera incremental, validando cada cambio antes de proceder al siguiente.

3. **Documentación**: Mantener documentación detallada de cambios y decisiones tomadas durante el proceso.

4. **Compatibilidad con SEO**: Asegurar que los cambios no afecten negativamente al SEO del blog.

5. **Rendimiento**: Monitorizar continuamente los indicadores de rendimiento para asegurar que cada fase mejora o al menos mantiene el rendimiento actual.

## Próximos Pasos Inmediatos

1. Implementar la solución de la Fase 1 para permitir el desarrollo con Node.js moderno
2. Crear un entorno de pruebas para validar cambios sin afectar la versión de producción
3. Establecer métricas base de rendimiento para comparar el impacto de futuras mejoras

## Solución Inmediata para el Error de OpenSSL

Para resolver específicamente el error `Error: error:0308010C:digital envelope routines::unsupported` que ocurre con Node.js v20.19.2, se proponen las siguientes acciones concretas:

1. **Modificar el package.json** para incluir la variable de entorno NODE_OPTIONS en los scripts:
   ```json
   "scripts": {
     "dev": "NODE_OPTIONS='--openssl-legacy-provider' node_modules/nuxt/bin/nuxt.js",
     "build": "NODE_OPTIONS='--openssl-legacy-provider' node_modules/nuxt/bin/nuxt.js build",
     "generate": "NODE_OPTIONS='--openssl-legacy-provider' node_modules/nuxt/bin/nuxt.js generate",
     "start": "NODE_OPTIONS='--openssl-legacy-provider' node_modules/nuxt/bin/nuxt.js start"
   }
   ```

2. **Alternativa para desarrollo local**: Crear un archivo `.npmrc` en la raíz del proyecto con:
   ```
   node-options=--openssl-legacy-provider
   ```

Este plan proporciona una hoja de ruta clara y estructurada para modernizar y mantener el blog Naia dentro del ecosistema Nuxt 2, asegurando su compatibilidad con entornos modernos de desarrollo mientras se optimiza su rendimiento y mantenibilidad a largo plazo.