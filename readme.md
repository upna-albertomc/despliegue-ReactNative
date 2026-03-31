# Despliegue de servicios multimedia.

## Ejercicio 1: Primeros pasos en react native.

Este ejercicio ha sido bastante guiado. No he tenido ningún probema para 
desplegar la aplicación por defecto. En cuanto al ejercicio adicional del
final, lo he visto bastante claro en el fichero que se especificaba en la
app de ejemplo aunque todavía no entienda la sintaxis en su totalidad.

## Ejercicio 2: Componentes React Native.

La mayor parte de mi tiempo con este ejercicio lo he pasado tratando de 
entender la estructura del programa. App.js instancia Campobase que instancia
Calendario. Este itera por el objeto creado en excursiones.js mediante FlatList 
y lo muestra por pantalla con List.Item. La documentación ha sido vital para 
poder entender el funcionamiento de la aplicación.

Mi mayor problema vino con la declaración de la imágen 40años. Al principio 
creía que era un problema de vsc tratando de interpretar la 'ñ', pero al no 
poder renombrarla o visualizarla de ninguna manera acabé llegando a la 
conclusión de que es mi sistema operativo (Linux mint MATE) el que no acepta 
el caracter. No encuentro manera de extraer la imagen integramente del zip 
proporcionado. De momento la he sustituido por la imagen bisaurin.

## Ejercicio 3: Componenetes funcionales en react Native.

Hasta ahora no tenía clara la diferencia entre componentes de clase y componentes
funcionales. Solo había utilizado funcionales. La sintaxis relativa a los componentes
de clase me resultó un poco confusa, pero creo que ya la entiendo. Al instanciar
una clase se corre el constructor e, inmediatamente después, la función render,
que contiene el comando return que determina lo que se muestra por pantalla.

Aun así creo que aún tardaré tiempo en acostumbrarme a las variables de estado,
posiblemente porque nunca trabajé con objetos en javascript. La sintaxis me 
recuerda a JSONs y me descoloca ver claves escritas sin comillas. Intuitivamente,
la función setState(Object) me hace pensar que estamos concatenando algo ya que
no he visto nunca una estructura de datos cambiar valores así.

La única duda que me queda en relación a la sintaxis es la distribución de 
funciones en DetalleExcursion. Me imagino que la función RenderExcursion()
existe para un ejercicio próximo en el que se envían más parámetros en la
instanciación de DetalleExcursion y la función titular distribuye los parámetros
de entrada y agrupa las salidas como componentes internos por motivos de 
modularidad.

En cuanto a copiar y ejecutar el código, lo único extra que necesité hacer fue
incluir onPress() (la función definida en DetalleExcursión y enviada a 
Calendario) en la declaración de esta última.
