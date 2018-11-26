var calculator = {
    value: 0,
    clear: function(){
      this.value = 0
    },
    add: function(a,b=this.value){
      this.value = b + a;
      return this.value;
    },
    subtract: function(a,b=this.value){
      this.value = b - a;
      return this.value;
    },
    multiply: function(a,b=this.value){
      this.value = b * a;
      return this.value;
    },
    divide: function(a,b=this.value){
      this.value = b / a;
      return this.value;
    },
    master: function(str){
      this.value = eval(str)
      return eval(str)
    }
  }
  