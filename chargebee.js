this.Chargebee = Npm.require('chargebee');

var runRequest = function(requestWrapper, callback) {
    requestWrapper.request(function(err, res) {
        callback(err, res);
    });
};

// Include meteor-compatible synchronous request style for a RequestWrapper
_.extend(this.Chargebee, {
    requestSync: Meteor.wrapAsync(runRequest)
});
