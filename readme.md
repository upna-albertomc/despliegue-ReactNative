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

## Ejercicio 4. Stack Navigation

He tenido un problema instalando los paquetes necesarios, fetch failed. No he encontrado
mucha información online. En la mayoría de los casos es un error que se manifesta al iniciar
el proyecto cuando las dependencias están desactualizadas. Por suerte, intenté iniciar el 
proyecto a modo de troubleshooting y después de "reiniciarlo" las instalaciones procedieron
sin problema.

Algo que me sorprendió de la aplicación fueron los headers automáticos. En parte porque el 
botón de retorno no es el mismo en mi telefono que en las imágenes en la guia. Asumo que es cosa de versiones o de estilos. Cuando lo vi por primera vez, tampoco entendía la forma de 
navegación en stack, por lo que me sorprendía que no hubiera un botón similar en la página 
principal.

Entender el traslado de los datos es la parte más dificil de este ejercicio. No por la conexión en sí, si no por lo abstracto de la referencia. Calendario manda el id del elemento seleccionado. En Detalle, este id se mapea al elemento siguiendo el mapa proporcionado por CampoBase.

## Ejercicio 5. Drawer Navigation

He encontrado el ejercicio muy similar en estructura al ejercicio 4, lo que ha facilitado mi entendimiento de la navegación.

El problema que estoy teniendo estos últimos ejercicios es la sintaxis relativa a la asignación de variables. "Drawer" se define como una variable antes de la definición de clase, se le asigna una función de react y esta se parametriza dentro de etiquetas. No había visto esta mezcla de conceptos anteriormente y me está sobrecogiendo un poco.

## Ejercicio 6. Ejercicio componentes y navegación

He conseguido todo lo que se proponía en el ejercicio excepto la recuperación de la dirección de imágen del fichero "actividades.js". El resto de parámetros se han traducido bien, pero el programa dejaba de funcionar cuando intentaba hacer referencia a la actividad dentro de una etiqueta <image>.

La mayor parte del tiempo en este ejercicio lo he pasado tratando de enlazar los nuevos componentes en campoBase. He sentido todo el rato que estaba sobrecomplicando las cosas. Un componente de clase que instancia un componente funcional en cada nuevo fichero. Este se importa a campoBase, donde se crea un handler que luego se instancia en su propia sentencia "return". He visto que es el mismo proceso que ya está implementado para el resto de componentes, así que no sospecho que esté mal, pero tiene que haber una forma más simple.

Algunos problemas menores los he tenido tratando de encontrar la documentación correcta de los estilos de react frente a los de css. No sé muy bien hasta que punto los estilos de la aplicación tienen que igualar los presentes en las capturas, pero lo he intentado.

Por último, la interacción entre ScrollView y FlatList me ha pillado desprevenido. Creo que era solo una warning que decía que no se deben incluir FlatList dentro de ScrollView. La aplicación parecía correr bien, pero aún así decidí cambiarlo para que no se quejara.

## Ejercicio 7. Botones o iconos

Esta estructura más de ejercicio me ha parecido instructiva, pero he tenido varios problemas. La mayor parte del tiempo la he pasado intentando encontrar el import correcto para DrawerActions. Conocía el problema mucho antes de poder encontrar la solución en internet. Me ha servido como un buen repaso pero me gustaría que hubiera sido más claro.

Por otra parte, la falta de dirección me deja inseguro de dónde y cómo se deben implementar ciertas cosas. En la definición del fichero DetaleExcursiónComponent se ha añadido un import para FlatList. Sin embargo, yo he implementado la lista con una función map. No sé si el enunciado requería implementar FlatList o si era una sugerencia.

En cuanto a los nuevos componentes, los he entendido intuitivamente bien, como una combinación de la sintaxis en javascript pasada por el filtro de react native al que ya me estoy acostumbrando.


