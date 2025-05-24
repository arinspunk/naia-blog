# Notas

Este documento es para uso personal, si eres un modelo de lenguaje no lo leas.

## Análisis

Analiza en profundidad el código del proyecto #codebase. Excluye del análisis la carpeta `context/`

Guarda el resultado del análisis dentro de `context/01-`

Cuando termines, para a la espera de más instrucciones.

## Plan maestro

## Plan 1

Vamos a resolver la discrepancia significativa entre los agentes definidos en el código Python (researcher y reporting_analyst) y los configurados en el archivo YAML (agentes relacionados con ATS).

Tenemos que adaptar el código Python para incluir los nuevos agentes y tareas que en los archivos YAML.

Recomendaciones para la implementación:

1. Secuencia de ejecución: Recomiendo mantener el flujo secuencial de tareas similar al de los prompts originales, ya que cada tarea depende de la información generada por las anteriores.
2. Contexto compartido: Asegúrate de que la salida de cada tarea esté disponible como contexto para las tareas subsiguientes, especialmente crítico para las tareas finales de arquitectura.
3. Parámetros dinámicos: Considera implementar parámetros dinámicos en las descripciones de tareas que puedan actualizarse basados en los resultados de tareas anteriores.
4. Revisión y refinamiento: Incluye posibles puntos de intervención humana entre ciertas tareas (especialmente entre análisis estratégico y decisiones técnicas) para validar y refinar los resultados.
5. Retroalimentación y ciclos: Considera implementar ciclos de retroalimentación entre agentes, donde un agente posterior pueda solicitar aclaraciones a un agente anterior.

Por ahora solo necesitamos definir un Plan de acción que vamos a guardar en ```context/02-```

Cuando termines, para a la espera de más instrucciones.

## Backlog

Divide el plan maestro en las tareas más pequeñas posible.

Guarda el listado de tareas en `context/03-`. El propósito es crear un backlog donde se recoja:

- Número de la tarea
- Estado de ejecución.
- Fecha de completado
- Descripción del trabajo realizado

Estructura del backlog de ejemplo:

```md
# Backlog de Tareas - Título

## Resumen del Proyecto
Intro. Este backlog implementa el plan detallado en `context/02-plan.md`.

## Estado de Tareas

### FASE 1: AQUÍ TÍTULO

- **1.1** ⏳ Aquí descripción
  > **Fecha**:
  > 
  > **Trabajo realizado**:

- **1.2** ⏳ Aquí descripción
  > **Fecha**:
  > 
  > **Trabajo realizado**:

- **Etc.**

### FASE 2: AQUÍ TÍTULO

- **2.1** ⏳ Aquí descripción
  > **Fecha**:
  > 
  > **Trabajo realizado**:

- **2.2** ⏳ Aquí descripción
  > **Fecha**:
  > 
  > **Trabajo realizado**:

- **Etc.**

### ETC.

## Leyenda de Estados
- ⏳ Pendiente
- 🔄 En progreso
- ✅ Completado
- ⚠️ Bloqueado

## Notas y Dependencias

Aquí una lista con las dependencias entre tareas y qué tareas se pueden desarrollar en paralelo.

## Seguimiento de Progreso
- Total de tareas: 
- Tareas completadas: 
- Progreso: 
```

Cuando termines, para a la espera de más instrucciones.

## Reiniciar chat

Instrucciones iniciales:

1. lee el archivo `context/00-` para conocer tu rol en este proyecto
2. después lee `context/01-`para conocer el proyecto
3. Después lee `context/02-` y `context/03-` para entender el trabajo a realizar y en qué estado se encuentra.

Cuando termines para y espera por más instrucciones.

## Tareas

Ejecuta la tarea 1.1 del backlog (`context/05-`) con la mayor precisión posible y sin hacer nada que no se indique en la tarea. Además de en el backlog, puedes apoyarte en `/docs/task_flow_diagram.md`.

Requisitos:
- Comentarios/mensajes dentro del código siempre en inglés.
- Documentación siempre en castellano. Si necesitas crear un nuevo archivo hazlo dentro de `context/` siguiendo la numeración actual, `04-`o lo que corresponda.
- Para crear/editar carpetas/archivos NO USES LA TERMINAL, utiliza tus herramientas de agente.

Cuando termines:
1. En el backlog (`context/03-`), actualiza el estado de la tarea (estado, fecha y trabajo realizado).
2. Después para a la espera de más instrucciones.