/**
 * Created by Ivan_Kauryshchanka on 1/23/2015.
 */
var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book
});