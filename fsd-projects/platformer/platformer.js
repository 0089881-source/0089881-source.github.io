$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid;

    // TODO 2 - Create Platforms
    createPlatform(0, 700, 400, 100);
    createPlatform(400, 600, 100, 200);
    createPlatform(600, 500, 100, 300);
    createPlatform(800, 400, 100, 400);
    createPlatform(900, 500, 100, 100);
    createPlatform(1000, 300, 500, 100);
    createPlatform(1000, 600, 100, 100);
    createPlatform(1100, 700, 100, 100);
    createPlatform(700, 170, 200, 100);
    createPlatform(400, 170, 200, 100);
    createPlatform(0, 170, 300, 100);
    createPlatform(1300, 300, 100, 500);
    createPlatform(500, 700, 100, 100);
    createPlatform(700, 700, 100, 100);
    createPlatform(900, 600, 200, 200)
    // TODO 3 - Create Collectables
    createCollectable("steve", 500, 660);
    createCollectable("diamond", 180, 130, 0.5, 0.7);
    createCollectable("kennedi", 900, 400);
    // TODO 4 - Create Cannons
   createCannon("top", 350, 600);
   createCannon("bottom", 1100, 800);
   createCannon("right", 245, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
