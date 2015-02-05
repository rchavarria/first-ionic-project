# first-ionic-project

First app based on Ionic framework, to develop an Android application and bundle it with Cordova

## Instalando Android Studio

Lo primero que se necesita es instalar Android SDK, y la manera más fácil es
instalar Android Studio completo. Se puede descargar de la página principal
de [Android Studio](https://developer.android.com/sdk/index.html#top).

El siguiente paso es instalarlo. Para ello seguir los pasos de tu sistema
operativo que encontrarás en
[instalando Android SDK](https://developer.android.com/sdk/installing/index.html?pkg=studio).
Para Linux, básicamente es descomprimir el fichero *zip* descargado y ejecutar
el script `android-studio/bin/studio.sh`.

Una vez instalado, hay que instalar ciertos paquetes pertenecientes al SDK.
Estos paquetes permiten desarrollar para varias versiones de Android, distintas
herramientas de simulación, etc. Para ello, se pueden seguir las instrucciones en
[instalar paquetes del SDK](https://developer.android.com/sdk/installing/adding-packages.html).

Como el objetivo es desarrollar aplicaciones android con [Cordova](http://cordova.apache.org)
e [ionic](http://ionicframework.com/) debemos tener en cuenta qué versiones de Android
soportan. Cordova parece que soporta versiones 2.3.x y, más interesantes, 4.x
([versiones soportadas por Cordova](http://cordova.apache.org/docs/en/4.0.0//guide_platforms_android_index.md.html#Android%20Platform%20Guide)),
por lo que instalaremos paquetes de esta versión de Android. También, por ser la más
actual en este momento, instalaremos la versión 5.0.1 de Android.

## Instalando Cordova

Después de tener instalado y funcionando Android Studio, vamos a instalar
[Apache Cordova](http://cordova.apache.org).

Existen dos formas de hacerlo, [descargándolo](http://cordova.apache.org/index.html#download)
o instalando la herramienta por
[línea de comandos](http://cordova.apache.org/docs/en/4.0.0//guide_cli_index.md.html#The%20Command-Line%20Interface).
Este último es el recomendado, así que a por él que vamos.

Como prerequisitos, Cordova pide tener instalado [NodeJS](http://nodejs.org) y un
cliente de [Git](http://git-scm.com) (parece que Cordova utiliza git para instalar
distintas dependencias).

Instalamos Cordova con el siguiente comando

    $ npm install -g cordova

Y para comprobar que se ha instalado correctamente, se puede comprobar con

    $ cordova

Así de simple. Si todo ha ido bien, veremos la ayuda por consola.

## Aplicación de ejemplo en Cordova

Antes de proseguir, vamos a crear una aplicación de ejemplo de Cordova, para
comprobar que todo está correctamente (Cordova + Android Studio).

    $ cordova create hello com.example.hello HelloWorld
    $ cd hello
    $ cordova platform add android
    $ cordova build
    $ cordova emulate android

En todo este proceso me he encontrado los siguientes errores:

- Debo tener configuradas ciertas variables de entorno:

    export ANDROID_HOME=/home/txingo/Android/Sdk
    export PATH="$ANDROID_HOME/tools:$ANDROID_HOME/platforms:$PATH"

- Debo tener instalado la herramienta `ant`:

    sudo apt-get install ant

- Aún así, tengo un error cuando intento `cordova build`. El error parece que
tiene que ver con intentar compilar el proyecto en un Linux de 64bits.

    ...build-tools/21.1.2/aapt: error while loading shared libraries: libstdc++.so.6...

- Y parece que se soluciona con:

    $ sudo apt-get install lib32z1

- Bueno, pues eso no lo soluciona a día de hoy. Pero lo he conseguido con

    $ sudo apt-get install libstdc++6:i386

## Instalando Ionic

En esta ocasión vamos a seguir la guía sobre
[cómo comenzar con Ionic](http://ionicframework.com/getting-started).

Ionic, al igual que Cordova, necesita de NodeJS para poder instalarse. Como
ya lo instalamos con Cordova, parece que tenemos todos los requisitos para
instalar Ionic.

    $ npm install -g ionic

Más sencillo, imposible. Con cualquiera de los siguientes comandos crearemos
una aplicación lista para ser ejecutada. ¡Increíble!

    $ ionic start myApp blank
    $ ionic start myApp tabs
    $ ionic start myApp sidemenu

Entramos en el directorio de la aplicación, añadimos la plataforma android
y ejecutamos el comando `emulate` para ver nuestra aplicación.

    $ cd myApp
    $ ionic platform add android
    $ ionic emulate android

¿Ha sido fácil eh? ¿Y ahora qué?

Ahora tenemos que avanzar en nuestro conocimiento a través de la
[documentación de Ionic](http://ionicframework.com/docs).

## Ionic : componentes CSS

Uno de los pilares de Ionic es su CSS (también se puede personalizar sus
ficheros Sass).

Ionic incluye unos cuantos [componentes CSS](http://ionicframework.com/docs/components)
listos para usar en tus proyectos.

No voy a incluir todos los componentes aquí, pero sí he de decir que
hay muchísimos, y muy variados. Seguro que encuentras todos los que 
necesitas para tus primeras aplicaciones.

## Ionic : JavaScript API

El siguiente gran pilar de Ionic son sus componentes JavaScript. Éstos están
implementados como servicios/factorías de AngularJS, lo que los hace muy fácil
de usar en una aplicación web (basada en AngularJS, por supuesto).

Entre ellos podemos encontrar la directiva `ion-content`, que permite tener
una vista Ionic con scroll; eventos como `on-hold`, `on-tap` `on-touch` o 
`on-swipe`; cabeceras; listas; diálogos modales; animaciones de carga;
popups; scrolls; vistas laterales;...





