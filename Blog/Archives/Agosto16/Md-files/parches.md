Todo el mundo habla de los _parches_, los _mods_, _plugins_ y, _addons_. ¿Pero qué son?
Hoy nos ocuparemos de los _parches_ y cómo aplicarlos sobre un código existente. 

Los parches son modificaciones que se han hecho sobre archivos de código, para cambiar
el comportamiento de una aplicación. Consiste en una variación del código original, 
guardada en un archivo a parte.

Es habitual encontrar en sistemas tipo _Unix_, aplicaciones para gestionar estos _parches_.
Comandos como `patch` y `diff` resultan útiles para un uso generalizado, sobre aplicaciones de
todo tipo, escritas en multitud de lenguajes de código.
> nota: un DVCS(sistema de control de versión distribuido) como _git_, es otro ejemplo 
> de aplicacion, que usa sus própios comandos, para llevar a cabo estas mismas tareas!

El comando `patch` toma un archivo de parche <kbd>patchfile<kbd> conteniendo una lista de
diferencias producidas por el comando `diff`, aplicando estas diferencias sobre uno o más
archivos originales, produciendo las _versiones de parche_. Normalmente estas versiones de
parche, reemplazan a los archivos originales.

ref -- diff nota: <kbd>
    $ git diff test.md
    diff --git a/Trash/test.md b/Trash/test.md
    index d9aaaea..3122702 100644
    --- a/Trash/test.md
    +++ b/Trash/test.md
    @@ -1 +1 @@
    -#esto es una prueba
    +### esto es una prueba
    $

#### Nomenclatura
Son ejemplos escritos sobre una _shell_, en nuetro caso una <kbd>bash</kbd>:

    $ patch < patch.file
    $ patch foo.c < patch.diff
    $ patch -pNum < /ruta/al/archivo

En el primer ejemplo es aplicado el parche `patch.file`, escribiendo la instrucción tal cual,
sobre la cónsola. El segundo ejemplo muestra como aplicar una  diferencias anteriormente 
creada, sobre el código original; en este `caso foo.c`.
La última línea de ejemplo determina la ruta que seguirá el comando `patch` para llegar hasta
el archivo _objetivo_. 
> __nota:__ ver página de manual.

Igualmente, los cambios pueden revertirse. Aunque será necesario en todo caso, ambos archivos.
Esto es: _archivo original_ y _parche_.

    $ patch -R < /ruta/a/mi_archivo

En esta línea, nos encontramos dentro del directorio que contiene el parche que se ha aplicado
a `mi_archivo` y explicitando la ruta que seguirá el comando hasta `mi_archivo`, se deshacen
los cambios realizados con la _bandera_ `-R`.

#### Crear parches







fuente: http://www.cyberciti.biz/faq/appy-patch-file-using-patch-command/    



