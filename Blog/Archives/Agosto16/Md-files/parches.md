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

El comando `patch` toma un archivo de parche <kbd>patchfile</kbd> conteniendo una lista de
diferencias producidas por el comando `diff`, aplicando estas diferencias sobre uno o más
archivos originales, produciendo las _versiones de parche_. Normalmente estas versiones de
parche, reemplazan a los archivos originales.


<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">$ git diff test.md
<span style="color: #000080; font-weight: bold">diff --git a/Trash/test.md b/Trash/test.md</span>
<span style="color: #000080; font-weight: bold">index d9aaaea..3122702 100644</span>
<span style="color: #A00000">--- a/Trash/test.md</span>
<span style="color: #00A000">+++ b/Trash/test.md</span>
<span style="color: #800080; font-weight: bold">@@ -1 +1 @@</span>
<span style="color: #A00000">-#esto es una prueba</span>
<span style="color: #00A000">+### esto es una prueba</span>
</pre></div>
<!-- END HTML generated using hilite.me -->


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
Para crear un parche puede utilizarse el siguiente comando:

    $ diff -u archivo-original nuevo > patch.diff

#### Aplicar parche a Hola-mundo.c

Comenzamos creando el archivo hola.c

<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">#include&lt;stdio.h&gt;</span>
 
main(){
  printf(<span style="color: #4070a0">&quot;Hello, world!</span><span style="color: #4070a0; font-weight: bold">\n</span><span style="color: #4070a0">&quot;</span>);
}
</pre></div>
<!-- END HTML generated using hilite.me -->

A continuación se copia el archivo, con el comado `cp` situaremos ésta copia del archivo
en el lugar conveniente, puede ser cualquier directorio -siempre que lo tengamos en cuenta. 

    $ cp hola.c hola-nuevo.c

Editando el archivo `hola-nuevo.c` y añadiendo la línea `return 0`, evitaremos algunas
advertencias por parte del compilador.


<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">#include&lt;stdio.h&gt;</span>
 
<span style="color: #902000">int</span> <span style="color: #06287e">main</span>(<span style="color: #902000">void</span>){
  printf(<span style="color: #4070a0">&quot;Hello, world!</span><span style="color: #4070a0; font-weight: bold">\n</span><span style="color: #4070a0">&quot;</span>);
  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #40a070">0</span>;
}
</pre></div>
<!-- END HTML generated using hilite.me -->

Ahora mediante la siguiente línea, será creado el archivo de parche, unificando las diferencias
entre ambos archivos:

    $ diff -u hola.c hola-nuevo.c > hola.patch
    $ cat hola.patch

Volcamos el contenido del archivo con `cat` sobre _fd1_, o lo que es lo mismo: _por pantalla!_
La salida es algo así:

<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #A00000">--- hello.c  2014-04-29 17:59:49.000000000 +0530</span>
<span style="color: #00A000">+++ hello-new.c  2014-04-29 18:00:43.000000000 +0530</span>
<span style="color: #800080; font-weight: bold">@@ -1,5 +1,6 @@</span>
 #include&lt;stdio.h&gt;
 
<span style="color: #A00000">-main(){</span>
<span style="color: #00A000">+int main(void){</span>
  printf(&quot;Hello, world!\n&quot;);
<span style="color: #00A000">+  return 0;</span>
 }
</pre></div>
<!-- END HTML generated using hilite.me -->

... y aplicamos el parche:

    ### el archivo hola.patch conoce el nombre del archivo a ser parcheado ##
    $ patch < hola.patch

La salida es algo así:

    patching file hola.c

Nuevamente con un `cat hola.c` imprimimos por _pantalla_, el contenido del archivo:

<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020">#include&lt;stdio.h&gt;</span>
 
<span style="color: #902000">int</span> <span style="color: #06287e">main</span>(<span style="color: #902000">void</span>){
  printf(<span style="color: #4070a0">&quot;Hello, world!</span><span style="color: #4070a0; font-weight: bold">\n</span><span style="color: #4070a0">&quot;</span>);
  <span style="color: #007020; font-weight: bold">return</span> <span style="color: #40a070">0</span>;
}
</pre></div>
<!-- END HTML generated using hilite.me -->

#### Trabajo sobre directorios

Conviene hacer una copia del directorio, antes de realizar ningún cambio. 

    $ cp -R mi-dir/ mi-nuevo-dir/

Una vez hecha la copia recursiva del directorio...

<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #bb60d5">$ </span><span style="color: #007020">pwd</span>
yes, this is: mi-nuevo-dir, the directory you  
are searching <span style="color: #007020; font-weight: bold">for</span>, but <span style="color: #007020; font-weight: bold">if </span>not! -&gt; <span style="color: #007020">cd</span> /to/it
</pre></div>
<!-- END HTML generated using hilite.me -->

Finalmente creamos el parche para _todo eldirectorio_, de la siguiente manera:

    $ diff -rupN mi-dir/ mi-nuevo-dir/ > my-dir.patch

Listo para parchear el directorio original sobre la misma máquina, o sobre cualquier otra que
contenga `mi-dir`:

    patch -p1 < my-dir.patch

---
__Fuente:__[Vivek Gite][Vivek]

[Vivek]:[http://www.cyberciti.biz/faq/appy-patch-file-using-patch-command/]
