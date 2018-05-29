(function () {
    "use strict";
    /**
     * config
     * @type {[type]}
     */
    angular.module(APP_NAME).config(bvConfigHttp);

    /**
     * [config_decorators description]
     * @method config_decorators
     * @param  {[type]}          $provide [description]
     * @return {[type]}                   [description]
     */
    function bvConfigHttp($provide, CUSTOMIZE) {
        function addHeaderToConfig(config) {
            config = config || {};
            config.headers = config.headers || {};

            // Add the header unless user asked to handle errors himself
            if (!specificallyHandleInProgress) {
                config.headers[HEADER_NAME] = true;
            }

            return config;
        }

        // The rest here is mostly boilerplate needed to decorate $http safely
        $provide.decorator("$http", [
            "$delegate",
            function ($delegate) {
                function decorateRegularCall(method) {
                    return function (url, config) {
                        return $delegate[method](url, addHeaderToConfig(config));
                    };
                }

                function decorateDataCall(method) {
                    return function (url, data, config) {
                        return $delegate[method](url, data, addHeaderToConfig(config));
                    };
                }

                function copyNotOverriddenAttributes(newHttp) {
                    for (var attr in $delegate) {
                        if (!newHttp.hasOwnProperty(attr)) {
                            if (typeof $delegate[attr] === "function") {
                                newHttp[attr] = function () {
                                    return $delegate[attr].apply($delegate, arguments);
                                };
                            } else {
                                newHttp[attr] = $delegate[attr];
                            }
                        }
                    }
                }

                var newHttp = function (config) {
                    return $delegate(addHeaderToConfig(config));
                };

                newHttp.get = decorateRegularCall("get");
                newHttp.delete = decorateRegularCall("delete");
                newHttp.head = decorateRegularCall("head");
                newHttp.jsonp = decorateRegularCall("jsonp");
                newHttp.post = decorateDataCall("post");
                newHttp.put = decorateDataCall("put");

                copyNotOverriddenAttributes(newHttp);

                return newHttp;
            }
        ]);
    }
})();