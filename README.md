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

## Future Considerations

The above process can be stream-lined to make it easier for widget developers.  Here's some considerations for enhancement:

1. Provide a sample README.md file to fill out
2. Provide a web UI to automatically create a repo for the logged in user.
2. Using a Node.JS CLI to configure the new widget or have a script from the web UI do this step.
3. Provide a cloud SaaS IDE for developers.
4. Provide a OpenShift template for creating the MyGov environment. Do this automatically via web UI.