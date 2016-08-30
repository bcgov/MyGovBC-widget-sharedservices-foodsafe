# MyGov FoodSafe 

FoodSafe widget for the MyGov platform.  Featuring:

1. Get Certified
2. Discover FoodSafe Certificate status


Update the package.json file with appropriate values.

## Configuring your AngularJS module

AngularJS modules MUST have unique names to ensure we don't get errors trying to load your module.

Change the AngularJS module name in `index.js`:

	const widgetModule = angular.module('mygov.widget.myorg.myservice', [])

Change the AngularJS state, i.e., how myGov navigates to your module:

	$stateProvider
      .state('myorgmyservice', {
        url: '/myorg/myservice',
        template: '<myorgmyservice></myorgmyservice>'
      })

## Defining instance-specific module configruations variables

The behavior of a module often needs to vary from instance to instance. For reasons such as

* a RESTful service url end point may differ from dev to prod,
* only enable debug on non-prod instances
* defining a "secret" variable that is not published in source code but available to a runtime instance

`myGov` supports two ways to define instance-specific module configuration variables

1. Use `appConstants.runtimeEnv` to differentiate instance by environments: development, test, or production. `appConstants` is
   defined in core module so your module has to add a dependency to it:

         const widgetModule = angular.module('mygov.widget.myorg.myservice', [require("_appRoot/core/core.module").name])

     Usage example:

         const widgetModule = angular.module('mygov.widget.myorg.myservice',
         [require("_appRoot/core/core.module").name])
         .component('myComponent', {
         templateUrl: require('./index.html'),
         controller: function (appConstants) {
          'ngInject'
          if(appConstants.runtimeEnv === 'production'){
           // do something just for production environment
          }
         }
         });
     The advantage using this method is everything is under your control. The disadvantages, however, are:

     1. you have to publish the variables, so it's unsuitable for "secrets".
     2. there is no one-to-one mapping of runtimeEnv to instance so the method is only an approximation.

2. Ask `mygov-core-client` maintainer to add your config variable, say `myWidgetSecret`, to appConstants section of local.js file of an instance. You can then reference it by `appConstants.myWidgetSecret`. Your module still needs to reference the core.module as shown in method 1. Because `local.js` is not published, you can define more confidential data. A word of warning however, the variable is only uglified/minified not encrypted. So don't expect end user cannot decode it.


## Testing it out

Clone the [myGov-core-client](https://bitbucket.org/fredwen/mygov-core-client) and [myGov-core-server](https://bitbucket.org/fredwen/mygov-core-server). And follow instructions in the README.md to install your new widget, build and run your very own MyGov site.


## License

    Copyright 2016 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at 

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
