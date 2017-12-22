(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    var gems = [ 
    
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.',
        canPurchase: true,
        soldOut: false,
    },
    
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'There is who seeks after it and wants to have it, simply because it is pain.',
        canPurchase: true,
        soldOut: false,
    },
    
    ];
}) ();


