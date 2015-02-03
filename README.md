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


