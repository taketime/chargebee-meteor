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

## usage with Meteor's synchronous style -- requestSync

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

## test
`meteor test-packages ./`
