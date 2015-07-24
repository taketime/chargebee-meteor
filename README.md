Chargebee for Meteor.
======

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

## test
`meteor test-packages ./`
