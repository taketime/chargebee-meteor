Tinytest.add('Chargebee is included', function(test){
    // Include node-chargebee
    test.isTrue(Chargebee != null);
});

Tinytest.add('Chargebee includes synchronus request method', function(test){
    // Include node-chargebee
    test.isTrue(_.isFunction(Chargebee.requestSync));
});
