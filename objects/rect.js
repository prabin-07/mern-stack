let rectangle = {
    l : 10,
    w : 3,

    area : function(l,w){
        console.log(this.l*this.w);
    },

    perimeter : function(l,w){
        console.log(2*(this.l*this.w));
    }
};

rectangle.area();
rectangle.perimeter();