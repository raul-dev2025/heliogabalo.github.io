#### Links Gnome 

Hace varios años, leí un artículo sobre como crear enlaces de escritorio, para una
aplicación que al instalarla, no lo crea. Dado que el mérito no es mio, he decidido
colgar al final del _post_, el enlace a mi fuente.

Como de costumbre, aquí en Territorio Linux, tomamos un enfoque de cónsola, para 
resolver problemas; aunque leyendo el artículo original, aquellos que sólo usen
_ratón_ también podrán conseguir lo mismo.

Lo primero es abrir una terminal. Típico `alt + F2`para llamar al lanzador de __gnome__
y el comando `gnome-terminal`, a continuación pulsamos _retorno de carro_. 

Aquí el que prefiera Gedit, desde la ventana que acaba de abrirse pude lanzarlo igualmente.
De cualquier otra forma, `nano` es una alternativa disponible en cualquier máquina _Linux_.

Empezamos creando un archivo al que llamaremos por el nombre del binario y, añadiendo el 
`.desktop`:

    $nano mozilla.desktop

Las siguientes líneas deben escribirse tal cuál. No es necesario modificar ninguna.
Obviamente para la versión del binario habrá que comprovarla antes. Con la bandera
de ayuda, obtendremos el formato adecuado para el comando que buscamos, habitualmente `-h`.

    [Desktop Entry]
    Version=1.0
    Type=Aplication
    Terminal=false

> n.d.e: si lo intentais com Mega(el directorio de 50Gb gratis en la nube), el lanzador 
es un desastre de proporciones cósmicas. Por lo general, cualquier aplicación de cónsola,
por muy pequeña que sea, guarda un pequeño resumen de comandos, accedido desde la cónsola 
con `-h` o `--help`. Por lo que si no sale nada o no funciona esto, hay
que sospechar. De la aplicación, del lanzador y, del sitio web desde fue descargado.
En nuestro caso la aplicación parece ser que guarda la clabe, en una caché que no se borra 
ni siquiera reiniciando sistema. 


...Continuamos con el archivo:

    Name=mozilla
    Categories=Network;
    Exec=/path/to/binary-file
    Comment=Este es mi comentario/algo
    Icon=/path/to/imagen.ico


Habrá que guardar el archivo. Las buenas prácticas, dictan hacer estas operaciones sobre
un directorio temporal! Continuamos habilitando permisos de ejecución:

    $ chmod +x mozilla.desktop

Como es lógico, es innecesario correr según que aplicaciones con permisos de administrador.
En función de esto, colocaremos el archivo donde toque. 
Hay dos directorios donde podrá colocarse nuestro archivo:
1. `/usr/sahre/applications`. Esta nunca es la primera opción, porque hay que ser un poco mas 
meticuloso, ya que habrá que escribir sobre el directorio, con los permisos oportunos. Y
Después, comprobar que tanto los permisos de operación, como los usuarios vinculados al archivo,
son los correctos.
Así que lo ideal, es hacerlo en el directorio de usuario: `$HOME/.local/share/applications`

    $ mv mozilla.desktop $HOME/.local/share/applications


#### Tabla de categorias usuales:
 
| Categorias | Variable |
|------------|:---------|
| Accesorios | `Categoria=Utility;`|
| Gráficos   | `Categoria=Graphics;|`
| Herramientas de sistema | `Categoria=System;`|
| Internet   | `Categoria=Network;`|
| Juegos     | `Categoria=Game;`   |
| Oficina    | `Categoria=Office;` |
| Sonido y video | `Categoria=AudioVideo;`|


El archivo completo quedaría algo así:


    [Desktop Entry]
    Version=1.0
    Type=Aplication
    Terminal=false
    Name=mozilla
    Categories=Network;
    Exec=/path/to/binary-file
    Comment=Este es mi comentario/algo
    Icon=/path/to/imagen.ico






Fuente: [eldebiandepepe](https://eldebiandepepe.wordpress.com/2011/12/19/crear-lanzadores-accesos-directos-en-el-menu-graficamente-o-con-el-terminal/)
