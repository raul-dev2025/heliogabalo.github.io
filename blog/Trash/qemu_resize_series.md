
Desde la redacción de Territorio Linux, queremos presentaros una serie de artículos,
dirigidos a virtualizar o para-virtualizar una máquina, corriendo desde un servidor
Linux.

Vamos a empezar casi por el final, pués mientras escribo estas líneas, el equipo de
desarrolladores, trabaja en ésta serie de artículos, realizando las comprobaciones 
oportunas, para evitar que la información sea erronea o desactualizada...

Presentamos __Qemu__. Se trata de un _emulador_, que cuenta con una ámplia gama de 
utilidades y _accesorios_ útiles tanto en entorno gráfico, como sobre la línea de 
comandos.

Aquí, vamos a centrarnos en una aproximación a sus funciones, siempre sobre la 
_cónsola_. Probablemente muchas personas habituadas a leer código, no encontrarán mayor
problema, siendo éstas instrucciones, encapsuladas en bloques de código:

`  
  $ bloque de código <-- '$' denota permisos de usuario  
`  

`  
  # otro bloque con permisos '#' usuario root o administrador  
`  


#### Redimensionar una imagen

En Qemu hablamos de imágen, para referirnos a un dispositivo virtual, que hará las veces
de disco duro. Dejamos para otro momento, el cómo, crear y administrar imágenes. Partiremos
desde este concepto principal, que es la _imagen_.

Bajo el comando `qemu-img` tenemos la opción `resize`, utilizada para alterar el tamaño de una
imagen, previamente creada.
El tamaño de una imagen, únicamente puede ser alterada, cuando la própia imagen fue creada en
formato _raw_ o crudo en inglés.

Sobre la distribución _fedora_(reseña al final del artículo), ha sido añadida otra característica
para esta opción `resize`. Pueden modificarse tamaños de imagen, creados en formato qcow2, 
para aumentar su tamaño, unicamente. Es decir, no podrá disminuir su espacio o hacerla más
pequeña.

> qcow2 -- qemu copy on write, version 2.

`  
  # qemu-img resize imagen tamaño  
`  

De esta forma añadimos espacio a la imagen ya creada, pero ojo, es un valor _absoluto_. Con
esto quiero decir, que si la imagen tenía 10 Gigas, utilizando este anterior comando:
`  
  # qemu-img resize miImagen.raw 10G  
`  
... la imagen pasará a tener 20 Gigas !!!

Para un efecto más granulado, puden usarse los operadores `+` y `-`, así:  
`  
  # qemu-img resize miImagen.raw +2G  
`  
Ahora nuestra imagen tendrá el tamaño deseado; 12 Gigas.

> man page:  
> qemu-img resize filename [+|-]size[K|M|G|T]  
> Los sufijos que pueden ser usados son:  
> K -- kilobytes  
> M -- megabytes  
> G -- gigabytes  
> T -- terabytes  


PRECAUCION:

Un aspecto importante que debe tenerse en cuenta, es ajustar el dispositivo acorde al 
nuevo tamaño asignado a la imagen. De otra forma, es posible corromper los datos de la
imagen:

### Aumentar su tamaño:
Si el tamaño es aumentado, _después_ de asignar el espacio a la imagen, con el comando 
descrito líneas arriba, debe ajustarse el tamaño del dispositivo, con las herramientas 
propias de particionado de disco.

### Disminuir el tamaño:
Para reducir el tamaño, primero es obligatorio el uso de estas herramientas de particionado.
Es decir, hay que lanzar la _Supuesta(VM)_ y reducir el espacio de disco _antes_ de 
redimensionar con qemu.

>> Vemos que el orden del proceso es opuesto en cada caso!!


__Reseña:__ en Territorio Linux, hemos encontrado que una de la librerías más importantes
de Qemu _libvirt_, no están completamente _integradas_ en otras distribuciones fuera 
de _Fedora_. 
Nuestro equipo utiliza generalmente máquinas _Debian_, y es verdad que las sibrerías están, 
pero nosotros no hemos sido capaces de instalarlas, _'sin romper el sistema'_.
Aconsejamos el uso de _Fedora_, que por otro lado tiene un entorno de usuario que, sencillamente
es glorioso!. Perfecto para un usario medio.
