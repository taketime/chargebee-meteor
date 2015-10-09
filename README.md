[![Build Status](https://travis-ci.org/taketime/chargebee-meteor.svg?branch=master)](https://travis-ci.org/taketime/chargebee-meteor)

Chargebee for Meteor.
========

Wraps [chargebee-node](https://github.com/chargebee/chargebee-node), for use in a Meteor app.

## install
`meteor add taketime:chargebee`

## usage
* Configure Chargebee
```
Meteor.startup(function() {
    if (Meteor.isServer) {
        Chargebee.configure({
            site : "your-site",
            api_key : "your-api-key"
        });
    }
});
```

* Do stuff described in the [chargebee api docs](https://apidocs.chargebee.com/docs/api?lang=node#client_library)

## requestSync(requestObject, [optionsObject])

All methods from the [npm module](https://github.com/chargebee/chargebee-node) exist and return a `RequestWrapper` object. That request may be run synchronously with `Chargebee.requestSync(requestWrapperObj)`.

Example:
```
// Synchronously list the first five plans
var request = Chargebee.plan.list({ limit: 5 });
try {
    Chargebee.requestSync(request);
} catch (e) {
    console.log("chargebee error", e);
}
```

You may also supply an `options` object, for replacing `api_key` or `site` in the request. This is useful if integrating across multiple chargebee instances. Tip: configure the global chargebee object with empty strings.  

Example:
```
// Synchronously list the first five plans
var request = Chargebee.plan.list({ limit: 5 });
try {
    Chargebee.requestSync(request, {
        api_key: 'some-other-api-key',
        site: 'some-other-site-key'
    });
} catch (e) {
    console.log("chargebee error", e);
}
```

## test
`meteor test-packages ./`
