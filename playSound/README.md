# Reproducir un archivo multimedia

## Requisitos

- [ngCordova](http://ngcordova.com)
- [Plugin Cordova Media](http://cordova.apache.org/docs/en/3.1.0/cordova_media_media.md.html)
- Versión de Cordova: 4.2.0
- Versión de Ionic: 1.3.8
- Versión de ngCordova: 0.1.12-alpha

## How to

1. Instalar plugin Cordova Media `cordova plugin add org.apache.cordova.media`
2. Instalar ngCordova: `bower install ngCordova [--save|--save-dev]`
3. En mi controlador AngularJS, añadir dependencia `$cordovaMedia`
4. Crear el recurso con el fichero que quiero reproducir

    var media = $cordovaMedia.newMedia('/android_asset/www/audio/<file>');

5. Reproducir o parar

    media.play();
    media.stop();

6. Consultar [documentación](http://ngcordova.com/docs/plugins/media) para conocer más métodos del API.

## Recursos

- [Cómo usar plugin Cordova Media](http://ngcordova.com/docs/plugins/media)
- [Recurso 1](https://blog.nraboy.com/2014/11/playing-audio-android-ios-ionicframework-app)
- [Recurso 2](http://forum.ionicframework.com/t/how-to-play-local-audio-files/7479)

