const myApp = {
  // some non-VM functionality would go here -> split the movies into genres using Vue
  movieA(data) {
    myApp.vm.mov=appData.movies;
  },

  vm : new Vue({
    el : "#app",

    data : {
      message : "Welcome to my Netflix ripoff!",

      mov : [] // these get populated from the function at the top of the file
    },

    methods : {

    },

    delimiters : ["${", "}"]
  })
}

myApp.movieA(appData.movies);
