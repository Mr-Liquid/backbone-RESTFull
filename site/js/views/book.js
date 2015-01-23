/**
 * Created by Ivan_Kauryshchanka on 1/23/2015.
 */

var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template($('#bookTemplate').html()),
    events:{
        'click .delete':'deleteBook'
    },

    render: function(){
        this.$el.html(this.template(this.model.attributes));

        return this;
    },
    deleteBook: function() {
        //Delete model
        this.model.destroy();

        //Delete view
        this.remove();
    }
});