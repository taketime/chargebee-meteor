this.Chargebee = Npm.require('chargebee');

var runRequest = function(requestWrapper, options, callback) {
    if (callback === undefined) {
        callback = options;
        requestWrapper.request(function(err, res) {
            callback(err, res);
        });
    } else {
        requestWrapper.request(function(err, res) {
            callback(err, res);
        }, options)
    }
};

// Include meteor-compatible synchronous request style for a RequestWrapper
_.extend(this.Chargebee, {
    requestSync: Meteor.wrapAsync(runRequest)
});
