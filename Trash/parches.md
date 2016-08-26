Todo el mundo habla de los _parches_, los _mods_, _plugins_ y, _addons_. ¿Pero qué son?

Hoy nos ocuparemos de los _parches_ y cómo aplicarlos sobre un código existente. 
Los parches son modificaciones que se han hecho sobre archivos de código, para cambiar
el comportamiento de la aplicación. Consiste en una variación del código original, 
guardada en un archivo a parte.

Cuando se trabaja con aplicaciones del tipo DVCS(sistema de control de versión distribuido)
como __git__ es habitual encontrar archivos que hacen referencia a éstas modificaciones:

    $ git diff test.md
    diff --git a/Trash/test.md b/Trash/test.md
    index d9aaaea..3122702 100644
    --- a/Trash/test.md
    +++ b/Trash/test.md
    @@ -1 +1 @@
    -#esto es una prueba
    +### esto es una prueba
    $


