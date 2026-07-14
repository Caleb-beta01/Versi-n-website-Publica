# 📘 Informe de Cambios: v0.2.0-Alpha

## 1. 📌 Resumen general

La versión **v0.2.0-Alpha** representará una transformación importante del proyecto. La aplicación dejará de presentarse únicamente como una calculadora de inflación y comenzará a evolucionar hacia una **SuperApp web de economía, precios y finanzas personales**.

La calculadora actual continuará disponible, pero pasará a ser una herramienta dentro de una plataforma más amplia, organizada mediante módulos, navegación lateral, panel principal, historial y nuevas utilidades financieras.

El objetivo principal será ofrecer una experiencia más completa, moderna y útil, manteniendo al mismo tiempo una interfaz sencilla para usuarios con conocimientos básicos.

---

## 2. 🎯 Objetivos de la actualización

Los principales objetivos de la versión serán:

- Transformar la aplicación en una plataforma modular.
- Incorporar una navegación propia de aplicaciones web modernas.
- Mantener la calculadora de inflación como herramienta principal.
- Añadir nuevas herramientas económicas y financieras.
- Mejorar la presentación de los resultados.
- Incorporar una página final después de completar un cálculo.
- Unificar el diseño visual de toda la aplicación.
- Preparar la aplicación para incorporar nuevas funciones progresivamente.
- Mejorar la experiencia en computadoras, tabletas y teléfonos.

---

## 3. 🚀 Nuevo concepto de la aplicación

La aplicación dejará de estar organizada alrededor de una única pantalla de cálculo.

La nueva estructura propuesta será:

```text
SuperApp financiera
├── Inicio
├── Calculadora
├── Gráficos
├── Comparador
├── Tipo de cambio
├── Herramientas
├── Historial
├── Favoritos
├── Configuración
└── Página final de resultados
```

Cada sección tendrá una función específica, pero utilizará el mismo sistema visual, almacenamiento y configuración.

---

## 4. 🏠 Nuevo panel principal

Se incorporará una pantalla de inicio o dashboard desde la que el usuario podrá acceder a todas las funciones.

El panel podrá mostrar:

- Accesos rápidos.
- Últimos cálculos.
- Inflación personal.
- Indicadores económicos.
- Tipo de cambio.
- Herramientas utilizadas recientemente.
- Escenarios guardados.
- Productos o precios seguidos.
- Metas financieras.
- Alertas importantes.

Ejemplo de contenido:

```text
Resumen financiero

Inflación personal: 5,42%
Inflación oficial: 4,35%
Precios monitoreados: 128
Últimos cálculos: 6
Escenarios guardados: 3
```

La pantalla de inicio será el punto central de la SuperApp.

---

## 5. 🧭 Nueva navegación lateral

En la versión de escritorio se añadirá un menú lateral permanente.

Las secciones iniciales serán:

- Inicio.
- Calculadora.
- Gráficos.
- Comparador.
- Tipo de cambio.
- Herramientas.
- Favoritos.
- Configuración.

El menú permitirá cambiar entre módulos sin abandonar la aplicación ni recargar toda la página.

También mostrará claramente cuál es la sección activa.

En dispositivos móviles, este menú podrá convertirse en:

- Menú desplegable.
- Barra inferior.
- Panel lateral deslizable.

---

## 6. 🧮 La calculadora pasa a ser un módulo

La calculadora de inflación seguirá utilizando las funciones existentes:

- Precio inicial.
- Precio final.
- Moneda.
- Tiempo transcurrido.
- Días, meses o años.
- Inflación total.
- Inflación promedio.
- Inflación anualizada.
- Poder adquisitivo.
- Tiempo de duplicación.
- Comparación entre escenarios.
- Gráficos.
- Reportes.

Sin embargo, se mostrará dentro de una sección propia y no como toda la aplicación.

También se mejorarán:

- Las etiquetas temporales de los gráficos.
- Los mensajes de validación.
- La presentación de los resultados.
- La integración con el historial.
- La navegación hacia herramientas relacionadas.

---

## 7. ✅ Nueva página final o “Ending Page”

Después de realizar correctamente un cálculo, el usuario podrá acceder a una nueva pantalla final.

La imagen diseñada establece la base visual de esta página web.

### Confirmación del cálculo

La página comunicará claramente que el proceso se completó correctamente.

El diseño será limpio y no dependerá de un encabezado excesivamente grande.

La zona principal dará prioridad a:

- Herramientas relacionadas.
- Resumen del cálculo.
- Valoración.
- Opciones para compartir.
- Navegación hacia otras secciones.

### 🧰 Accesos a herramientas relacionadas

La página mostrará tarjetas para continuar utilizando la aplicación:

- Gráficos.
- Comparador.
- Tipo de cambio.
- Más herramientas.

Cada tarjeta incluirá:

- Un icono.
- El nombre de la herramienta.
- Una breve explicación.
- Un botón o enlace de acceso.

Esto evitará que el usuario llegue a una pantalla sin continuación después del cálculo.

### 📊 Resumen del cálculo

La página final mostrará los principales resultados:

```text
Inflación total: 25,32%
Inflación promedio mensual: 1,89%
Tiempo analizado: 12 meses
Moneda base: USD
```

Los valores se obtendrán automáticamente del último cálculo realizado.

La página no utilizará cifras fijas. Todo deberá actualizarse según los datos introducidos por el usuario.

### 🕘 Historial automático

Cuando el cálculo sea válido, se guardará un registro con:

- Fecha y hora.
- Precio inicial.
- Precio final.
- Monedas.
- Duración.
- Unidad temporal.
- Inflación total.
- Promedio periódico.
- Inflación anualizada.
- Escenario utilizado.

Desde la página final se podrá abrir directamente el historial.

### ⭐ Valoración de la herramienta

Se incluirá una sección de valoración sencilla.

```text
¿Te fue útil esta herramienta?

☆ ☆ ☆ ☆ ☆
```

Inicialmente, la valoración podrá guardarse localmente.

No será necesario crear una cuenta ni conectarse a un servidor durante la primera fase.

### 🔗 Compartir resultado

El usuario podrá compartir el resultado mediante:

- Copiar enlace.
- WhatsApp.
- X.
- Facebook.
- LinkedIn.
- Copiar resumen de texto.

La información compartida deberá ser breve y no incluir datos sensibles sin autorización.

Ejemplo:

```text
Calculé una inflación acumulada del 25,32% durante 12 meses.
Resultado generado con la SuperApp financiera.
```

### 📄 Pie de página

La página final tendrá un pie de página limpio.

Incluirá:

- Nombre de la aplicación.
- Versión.
- Aviso legal.
- Año.
- Enlaces secundarios.

Ejemplo:

```text
Esta herramienta ofrece simulaciones matemáticas y educativas.
No constituye asesoramiento financiero.
```

---

## 8. 🧹 Elementos retirados del diseño inicial

De acuerdo con la última modificación visual, se eliminará el gran bloque superior que contenía:

- Icono de confirmación grande.
- Título excesivamente destacado.
- Texto de agradecimiento extenso.
- Mensaje central de finalización.

La nueva composición será más limpia y dará prioridad a:

- Herramientas relacionadas.
- Resumen del cálculo.
- Valoración.
- Opciones para compartir.
- Navegación.

La zona superior conservará el fondo y algunos elementos decorativos, pero tendrá menos contenido visual.

---

## 9. 🧰 Nuevas herramientas

La sección **Herramientas** podrá incorporar gradualmente nuevas funciones.

### Herramientas iniciales

- Calculadora de inflación.
- Poder adquisitivo.
- Salario real.
- Rentabilidad real.
- Conversor de monedas.
- Comparador de precios.
- Interés compuesto.
- Cuotas y financiación.

### Herramientas futuras

- Presupuesto mensual.
- Registro de ingresos y gastos.
- Metas de ahorro.
- Seguimiento de precios.
- Inflación personal.
- Cesta de consumo.
- Comparación de tiendas.
- Control de suscripciones.
- Calendario financiero.

No todas deberán desarrollarse en una sola actualización. La interfaz se preparará para incorporarlas progresivamente.

---

## 10. 🕘 Historial de cálculos

Se añadirá una sección independiente para consultar cálculos anteriores.

Cada registro mostrará:

- Fecha.
- Nombre opcional.
- Resultado principal.
- Duración.
- Moneda.
- Tipo de cálculo.

Acciones disponibles:

- Abrir.
- Reutilizar datos.
- Duplicar.
- Compartir.
- Marcar como favorito.
- Eliminar.

El historial se almacenará inicialmente en el navegador mediante `localStorage` o `IndexedDB`.

---

## 11. ⭐ Sistema de favoritos

El usuario podrá marcar como favoritos:

- Herramientas.
- Cálculos.
- Comparaciones.
- Escenarios.
- Reportes.

Los favoritos aparecerán en una sección específica y también podrán mostrarse en el dashboard.

---

## 12. 📈 Centro de gráficos

Los gráficos dejarán de depender exclusivamente de la pantalla de resultados.

Se creará una sección propia para visualizar:

- Evolución de precios.
- Comparación de escenarios.
- Inflación acumulada.
- Inflación periódica.
- Poder adquisitivo.
- Inflación oficial frente a inflación personal.

También se corregirá el eje temporal para que muestre unidades reales:

```text
0 meses
3 meses
6 meses
9 meses
12 meses
```

Esto sustituirá las etiquetas genéricas “Inicio” y “Fin”.

---

## 13. ⚖️ Comparador

El comparador se convertirá en una herramienta independiente.

Permitirá comparar:

- Dos productos.
- Dos períodos.
- Dos monedas.
- Dos escenarios.
- Inflación oficial frente a variación real.
- Precio al contado frente a financiación.
- Salario frente a inflación.

La comparación mostrará diferencias en porcentajes y puntos porcentuales.

---

## 14. 💱 Centro de tipo de cambio

Se añadirá una sección específica para monedas.

Funciones previstas:

- Conversión entre monedas.
- Consulta de tasas.
- Fecha de actualización.
- Historial básico.
- Comparación de monedas.
- Conversión aplicada a los cálculos.
- Advertencia cuando se comparen precios en monedas diferentes.

Inicialmente se mantendrán BRL y USD, pero la estructura deberá permitir añadir otras monedas.

---

## 15. 🎨 Mejoras visuales

La nueva interfaz conservará el estilo oscuro actual, pero tendrá una identidad visual más uniforme.

Características previstas:

- Fondo azul oscuro.
- Tarjetas semitransparentes.
- Bordes suaves.
- Sombras discretas.
- Acentos en cian, violeta, verde y naranja.
- Iconos consistentes.
- Botones con estados claros.
- Mejor separación entre secciones.
- Menos elementos saturando la pantalla.
- Diseño adaptable.

Los colores tendrán funciones específicas:

```text
Cian: acciones principales y gráficos.
Violeta: navegación y elementos destacados.
Verde: resultados positivos y confirmaciones.
Naranja: comparaciones y herramientas secundarias.
Rojo: errores o alertas.
```

---

## 16. 🌙 Modo oscuro

El modo oscuro será el diseño principal de la versión.

El botón visible en la cabecera podrá evolucionar posteriormente para permitir:

- Tema oscuro.
- Tema claro.
- Tema automático según el sistema.

En la primera implementación se podrá mantener únicamente el diseño oscuro para evitar complejidad innecesaria.

---

## 17. ⚙️ Configuración

La nueva sección de configuración permitirá gestionar:

- Moneda predeterminada.
- Idioma.
- Tema.
- Cantidad de decimales.
- Unidad temporal preferida.
- Confirmaciones.
- Historial.
- Copias de seguridad.
- Restablecimiento de datos.

Estas preferencias se guardarán localmente.

---

## 18. 💾 Sistema de almacenamiento

Se unificará la forma de guardar la información de la aplicación.

Estructura sugerida:

```javascript
const APP_STATE = {
  settings: {},
  history: [],
  favorites: [],
  calculations: [],
  scenarios: [],
  baskets: [],
  products: [],
  reports: []
};
```

Para datos sencillos se podrá utilizar `localStorage`.

Para historiales más grandes se recomienda utilizar `IndexedDB`.

También se añadirá:

- Exportar copia de seguridad.
- Importar copia de seguridad.
- Restablecer datos.
- Confirmación antes de eliminar información.

---

## 19. 🔀 Navegación interna

La aplicación funcionará como una experiencia de página única.

Cuando el usuario seleccione una sección:

- No se recargará toda la página.
- Se actualizará el contenido central.
- Se mantendrá el menú lateral.
- Se conservará el estado actual.
- Se actualizará la URL cuando sea posible.

Ejemplo:

```text
/#/inicio
/#/calculadora
/#/graficos
/#/comparador
/#/historial
/#/herramientas
```

Esto permitirá compartir enlaces directos hacia determinadas herramientas.

---

## 20. 📱 Diseño adaptable

La aplicación deberá funcionar correctamente en:

- Computadoras.
- Portátiles.
- Tabletas.
- Teléfonos.

En pantallas pequeñas:

- El menú lateral se ocultará.
- Las tarjetas se colocarán verticalmente.
- Los botones tendrán mayor área táctil.
- Las tablas podrán desplazarse horizontalmente.
- Los gráficos ajustarán su altura.
- La página final se reorganizará en una sola columna.

---

## 21. ♿ Accesibilidad

Se mejorarán los siguientes aspectos:

- Etiquetas asociadas a todos los campos.
- Navegación mediante teclado.
- Indicadores de enfoque.
- Contraste adecuado.
- Mensajes de error accesibles.
- Uso correcto de botones y enlaces.
- Textos alternativos para iconos.
- Regiones `aria-live` para resultados.

Los elementos decorativos no deberán interferir con lectores de pantalla.

---

## 22. 🚦 Prioridades de desarrollo

### 🔴 Prioridad alta

1. Crear la estructura general de la SuperApp.
2. Añadir navegación lateral.
3. Convertir la calculadora en un módulo.
4. Implementar el dashboard.
5. Crear la página final.
6. Guardar cálculos en el historial.
7. Adaptar la interfaz a dispositivos móviles.

### 🟠 Prioridad media

1. Añadir favoritos.
2. Crear el centro de gráficos.
3. Separar el comparador.
4. Crear el centro de tipo de cambio.
5. Añadir opciones para compartir.
6. Añadir valoraciones.
7. Mejorar la configuración.

### 🟡 Prioridad futura

1. Registro de ingresos y gastos.
2. Seguimiento de productos.
3. Metas de ahorro.
4. Inflación personal.
5. Sincronización en la nube.
6. Perfiles de usuario.
7. Alertas automáticas.
8. Herramientas avanzadas.

---

## 23. 📦 Alcance recomendado para v0.2.0-Alpha

Para evitar que la actualización resulte demasiado grande, se recomienda incluir inicialmente:

- Nuevo dashboard.
- Menú lateral.
- Calculadora como módulo.
- Página final de resultados.
- Historial local.
- Herramientas relacionadas.
- Sistema de favoritos básico.
- Nueva estructura visual.
- Mejoras de navegación.
- Diseño adaptable.

Las funciones más complejas, como presupuesto, gastos, cuentas de usuario o sincronización, deberán desarrollarse posteriormente.

---

## 24. ✨ Resultado esperado

Al finalizar la actualización, el proyecto ya no se percibirá únicamente como una calculadora.

El usuario tendrá una plataforma desde la que podrá:

- Realizar cálculos.
- Consultar resultados anteriores.
- Abrir otras herramientas.
- Comparar escenarios.
- Analizar gráficos.
- Consultar monedas.
- Guardar favoritos.
- Compartir resultados.
- Continuar navegando después de terminar un cálculo.

Esta actualización será la base para convertir el proyecto en una verdadera **SuperApp web de economía y finanzas personales**.

---

## 25. 🏁 Conclusión

La versión **v0.2.0-Alpha** representará un cambio estructural y visual importante.

La calculadora continuará siendo una parte esencial del proyecto, pero dejará de ser la única función disponible.

La incorporación del dashboard, la navegación modular, el historial y la nueva página final permitirá construir una experiencia más profesional, escalable y útil.

La prioridad no será añadir una gran cantidad de funciones incompletas, sino crear una base sólida sobre la que puedan desarrollarse progresivamente las demás herramientas de la SuperApp. 🚀
