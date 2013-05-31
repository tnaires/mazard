var Game = function() {
  var
    fps, screen, inputHandler,

    registerInputCallbacks = function() {
      // Register callbacks here

      inputHandler.buildListeners();
    };

  this.setUp = function(_fps, resolution) {
    fps = _fps;
    
    screen = new Screen(resolution.width, resolution.height);
    screen.init();

    inputHandler = new InputHandler();
    registerInputCallbacks();
  };

  this.start = function() {
    screen.clear();
    screen.draw();
    setInterval(this.start, 1000 / fps);
  };
};
