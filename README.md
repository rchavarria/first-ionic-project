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

## Ionic : construyendo una aplicación de ejemplo

Siguiendo el tutorial [Ionic book](http://ionicframework.com/docs/guide),
comencemos una nueva aplicación, con el tema más simple

    $ ionic start todo blank

Este comando creará una nueva aplicación Ionic en el directorio `todo`. Dentro
de este directorio podremos encontrar multitud de ficheros de configuración:
Ionic, Cordova, Gulp, Bower,...

Entremos en el directorio `todo` y añadamos la plataforma Android:

    $ cd todo
    $ ionic platform add android

### Creando las primeras pantallas

La aplicación va a ser una aplicación de tareas por hacer (en inglés: todos).

Una aplicación Ionic/Cordova es básicamente una aplicación web, y la 
*pantalla de inicio* se encuentra en el fichero `www/index.html`. Aunque hayamos
creado una aplicación en blanco, Ionic ya ha creado cierto contenido básico
en dicho fichero.

``` html
<!DOCTYPE html>
<html>
  <head>
    <!-- ionic css files -->
    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <!-- your own css files -->
    <link href="css/style.css" rel="stylesheet">

    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>

    <!-- cordova script (this will be a 404 during development) -->
    <script src="cordova.js"></script>
  </head>
  <body>
  </body>
</html>
```

Nuestra aplicación será una aplicación muy sencilla, donde podremos ver un menú
desplazando la pantalla. Es lo que se conoce como *side menus*. Por lo que dentro
del cuerpo de nuestro HTML añadiremos:

``` html
<body>
    <ion-side-menus>
        <ion-side-menu-content>
        </ion-side-menu-content>
        <ion-side-menu side="left">
        </ion-side-menu>
    </ion-side-menus>
</body>
```

`ion-side-menu-content` define el contenido principal, mientras que `ion-side-menu`
nos permite definir lo que irá dentro del menú desplegable a la izquierda.

### Inicializando la aplicación

En el fichero `www/js/app.js` definiremos nuestra aplicación AngularJS, llamada `todo`:

``` javascript
angular.module('todo', ['ionic'])
//...
```

En `www/index.html` debemos incluir el anterior fichero JavaScript, justo antes de
cuando incluimos `cordova.js`. 

Y por último, inicializamos la aplicación AngularJS como cualquier otra de este
framework:

``` html
<body ng-app="todo">
```

Para poder comenzar a ver algún contenido en nuestra aplicación, comenzaremos por
mostrar unas cabeceras tanto en el panel principal como en el menú deslizable:

``` html
<ion-side-menu-content>
    <ion-header-bar class="bar-dark">
        <h1 class="title">Todo</h1>
    </ion-header-bar>
    <ion-content>
    </ion-content>
</ion-side-menu-content>

<ion-side-menu side="left">
    <ion-header-bar class="bar-dark">
        <h1 class="title">Projects</h1>
    </ion-header-bar>
</ion-side-menu>
```

### Creando una lista de tareas por hacer

Conjugando elementos de Ionic como `ion-list` y `ion-item` con la directiva
de AngularJS `ng-repeat` podremos crear listas increíbles en nuestras aplicaciones.
Para la nuestra será muy simple, pero por algo hay que empezar:

``` html
<ion-list>
    <ion-item ng-repeat="task in tasks">
        {% raw %}{{task.title}}{% endraw %}
    </ion-item>
</ion-list>
```

Pero para poder hacer uso de AngularJS, debemos añadir un controlador (lo haremos
a nivel de `body`) y crear un array de datos en `$scope` para poder utilizar esos
datos en la directiva `ng-repeat`.

``` html
<body ng-app="todo" ng-controller="TodoCtrl">
```

``` javascript
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];
});
```

### Creando tareas

Una aplicación no sería tal si no permitiera cierta interacción con el usuario.
Nosotros le vamos a permitir crear tareas (por ahora). El usuario podrá crear
tareas introduciendo datos en un formulario que será mostrado en un diálogo 
modal.

El HTML del diálogo lo definiremos en una plantilla de AngularJS, que es una
forma muy extendida de reutilizar código en dicho framework. Básicamente,
tendremos un botón en una cabecera para cerrar el diálogo, y un formulario
con una etiqueta, una caja de texto y un botón para aceptar los datos del
formulario.

El siguiente código la añadiremos a `www/index.html`, justo después del
cierre de la etiqueta `ion-side-menu`.

``` html
<script id="new-task.html" type="text/ng-template">
    <div class="modal">

        <!-- Modal header bar -->
        <ion-header-bar class="bar-secondary">
            <h1 class="title">New Task</h1>
            <button class="button button-clear button-positive" ng-click="closeNewTask()">Cancel</button>
        </ion-header-bar>

        <!-- Modal content area -->
        <ion-content>

        <form ng-submit="createTask(task)">
            <div class="list">
                <label class="item item-input">
                    <input type="text" placeholder="What do you need to do?" ng-model="task.title">
                </label>
            </div>
            <div class="padding">
                <button type="submit" class="button button-block button-positive">Create Task</button>
            </div>
        </form>

        </ion-content>
    </div>
</script>
```

Este diálogo modal lo podremos abrir a partir de un botón en la cabecera del
contenido principal (de la lista de tareas).

``` html
<button class="button button-icon" ng-click="newTask()">
    <i class="icon ion-compose"></i>
</button>
```

Y para dar funcionalidad a todo esto, nuestro código AngularJS quedaría tal
que así:

``` javascript
.controller('TodoCtrl', function($scope, $ionicModal) {
    // No need for testing data anymore
    $scope.tasks = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    // Called when the form is submitted
    $scope.createTask = function(task) {
        $scope.tasks.push({
            title: task.title
        });
        $scope.taskModal.hide();
        task.title = "";
    };

    // Open our new task modal
    $scope.newTask = function() {
        $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function() {
        $scope.taskModal.hide();
    };
});
```

### Añadiendo projectos

Ahora vamos a hacer lo mismo pero con *proyectos*, de forma que cada proyecto
tendrá sus tareas asociadas.

En la cabecera mostraremos el nombre del proyecto seleccionado

``` html
<h1 class="title">{{activeProject.title}}</h1>
```

Y las tareas a mostrar pertenecen al proyecto activo

``` html
<ion-item ng-repeat="task in activeProject.tasks">
    {{task.title}}
</ion-item>
```

El menú lateral quedaría:

``` html
<ion-side-menu side="left">
    <ion-header-bar class="bar-dark">
        <h1 class="title">Projects</h1>
        <button class="button button-icon ion-plus" ng-click="newProject()">
        </button>
    </ion-header-bar>
    <ion-content scroll="false">
        <ion-list>
            <ion-item ng-repeat="project in projects" ng-click="selectProject(project, $index)" ng-class="{active: activeProject == project}">
                {{project.title}}
            </ion-item>
        </ion-list>
    </ion-content>
</ion-side-menu>
```

Donde tendremos un nuevo botón para añadir proyectos, una lista de proyectos
(exactamente igual que la lista de tareas) y la posibilidad de seleccionar
un proyecto.

En la parte de JavaScript, tendremos un nuevo servicio, `Projects` que
gestionará los proyectos. Los cargará y almacenará en *localStorage*, un
servicio proporcionado por los navegadores para almacenar datos de forma
sencilla.

``` javascript
.factory('Projects', function() {
    return {
        all: function() {
            var projectString = window.localStorage['projects'];
            if(projectString) {
                return angular.fromJson(projectString);
            }
            return [];
        },
        save: function(projects) {
            window.localStorage['projects'] = angular.toJson(projects);
        },
        newProject: function(projectTitle) {
            // Add a new project
            return {
                title: projectTitle,
                tasks: []
            };
        },
        getLastActiveIndex: function() {
            return parseInt(window.localStorage['lastActiveProject']) || 0;
        },
        setLastActiveIndex: function(index) {
            window.localStorage['lastActiveProject'] = index;
        }
    }
})
```

También debemos modificar nuestro controlador. Se proporciona el código completo,
pero solo se han añadido nuevos métodos para gestionar los proyectos y cambiado
algunas propiedades de `$scope` para adaptarse a que las tareas pertenecen
ahora a proyectos.

``` javascript
.controller('TodoCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {

    // A utility function for creating a new project
    // with the given projectTitle
    var createProject = function(projectTitle) {
        var newProject = Projects.newProject(projectTitle);
        $scope.projects.push(newProject);
        Projects.save($scope.projects);
        $scope.selectProject(newProject, $scope.projects.length-1);
    }

    // Load or initialize projects
    $scope.projects = Projects.all();

    // Grab the last active, or the first project
    $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

    // Called to create a new project
    $scope.newProject = function() {
        var projectTitle = prompt('Project name');
        if(projectTitle) {
            createProject(projectTitle);
        }
    };

    // Called to select the given project
    $scope.selectProject = function(project, index) {
        $scope.activeProject = project;
        Projects.setLastActiveIndex(index);
        $ionicSideMenuDelegate.toggleLeft(false);
    };

    // Create our modal
    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope
    });

    $scope.createTask = function(task) {
        if(!$scope.activeProject || !task) {
            return;
        }
        $scope.activeProject.tasks.push({
            title: task.title
        });
        $scope.taskModal.hide();

        // Inefficient, but save all the projects
        Projects.save($scope.projects);

        task.title = "";
    };

    $scope.newTask = function() {
        $scope.taskModal.show();
    };

    $scope.closeNewTask = function() {
        $scope.taskModal.hide();
    }

    $scope.toggleProjects = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    // Try to create the first project, make sure to defer
    // this by using $timeout so everything is initialized
    // properly
    $timeout(function() {
        if($scope.projects.length == 0) {
            while(true) {
                var projectTitle = prompt('Your first project title:');
                if(projectTitle) {
                    createProject(projectTitle);
                    break;
                }
            }
        }
    });

});
```

## Paso final

Ya tenemos la aplicación desarrollada, ahora solo hace falta ejecutarla para
verla en acción. Para ello hay multitud de opciones:

1. Verla en un navegador en nuestro escritorio: `ionic serve`
2. Ejecutarla en un emulador: `ionic build android && ionic emulate android`
3. Probarla en un dispositivo real conectado: `ionic run android`
4. Ejecutarla en un navegador en un dispositivo: `ionic serve` y visitar desde
el dispositivo la dirección que indica Ionic. El dispositivo debe estar en
la misma red local.
5. [Publicar la aplicación](http://ionicframework.com/docs/guide/publishing.html)

