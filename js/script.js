$(document).ready(function() {
  
  // variables
  var name = " ";
  var welcomeLoaded = false;
  var mainLoaded = false;
  var quizLoaded = false;
  var level1Complete = false;
  var level2Complete = false;
  var level3Complete = false;

  // First page
  var welcomeSection = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false,
    duration: 1000,
  })
  .add({
    targets: ".logo",
    opacity: [0, 1],
    scale: [0, 1],
  })
  .add({
    targets: ".title",
    opacity: [0, 1],
    scale: [0, 1],
    rotate: ["360deg", "0deg"],
  })
  .add({
    targets: ".name-input",
    opacity: [0, 1],
    scale: [0, 1],
  })
  .add({
    targets: ".quizzy-tooltip",
    opacity: [0, 1],
    scale: [0, 1],
  });

  // Logo movement animation
  var logoFront = anime({
    targets: ".logo-front",
    easing: "easeInQuad",
    translateY: [-30, 30],
    autoplay: true,
    direction: 'alternate',
    loop: true,
    duration: 1500
  });
  var logoBack = anime({
    targets: ".logo-back",
    easing: "easeInQuad",
    translateY: [30, -30],
    autoplay: true,
    direction: 'alternate',
    loop: true,
    duration: 1500
  });

  // Second page
  var mainSection = anime.timeline({
    easing: "easeInOutQuart",
    autoplay: false,
    duration: 800,
  })
  .add({
    targets: ".navbar-brand",
    opacity: [0, 1],
    scale: [0, 1],
  })
  .add({
    targets: ".nav-item",
    opacity: [0, 1],
    scale: [0, 1],
    delay: anime.stagger(200),
  })
  .add({
    targets: "#player-name",
    opacity: [0, 1],
    translateX: [300, 0],
  })
  .add({
    targets: ".bi-share-fill",
    opacity: [0, 1],
    scale: [0, 1],
  })
  .add({
    targets: ".main-header",
    opacity: [0, 1],
    translateY: [-100, 0],
  })
  .add({
    targets: ".level1",
    translateX: [-1000, 0],
  })
  .add({
    targets: ".level2",
    translateX: [-1500, 0],
  }, '-=600')
  .add({
    targets: ".level3",
    translateX: [-2000, 0],
  }, '-=600');

  // Level buttons
  // bicycle
  var bicycle = anime({
    targets: ".bicycle",
    easing: "easeInOutQuad",
    translateX: [-400, 500],
    duration: 5000,
    loop: true,
  });

  var bicycleWheel = anime({
    targets: "#Bicycle_Back_Wheel, #Bicycle_Front_Wheel, #Quiz_Bicycle_Back_Wheel, #Quiz_Bicycle_Front_Wheel",
    easing: "linear",
    duration: 1000,
    loop: true,
    autoplay: true,
    rotate: "360deg"
  });
  
  // car
  var car = anime({
    targets: ".car",
    easing: "easeInOutQuad",
    translateX: [-500, 600],
    duration: 3000,
    loop: true,
    autoplay: false,
  });

  var carWheel = anime({
    targets: "#Car_Back_Wheel, #Car_Front_Wheel",
    easing: "linear",
    rotate: "360deg",
    duration: 500,
    loop: true,
    autoplay: false,
  });

  // quiz
  var quizSection = anime.timeline({
    easing: "easeInOutQuad",
    duration: 600,
    autoplay: false,
  })
  .add({
    targets: "#quiz-bicycle-header",
    scale: [0, 1],
    opacity: [0, 1],
  })
  .add({
    targets: "#quiz-bicycle-start-btn",
    scale: [0, 1],
    opacity: [0, 1],
  });

  // bicycle quiz
  var quizBicycle = anime.timeline({
    easing: "linear",
    duration: 10000,
    loop: true,
  })
  .add({
    targets: "#quiz-bicycle-svg",
    translateX: [-1500, 1500],
  })
  .add({
    targets: "#quiz-bicycle-svg",
    rotateY: "180deg",
    duration: 100,
  })
  .add({
    targets: "#quiz-bicycle-svg",
    translateX: [1500, -1500],
  });

  // car quiz
  var quizCar = anime.timeline({
    easing: "easeInOutQuad",
    duration: 7000,
    loop: true,
  })
  .add({
    targets: "#quiz-car-svg",
    translateX: [-1500, 2000],
  })
  .add({
    targets: "#quiz-car-svg",
    rotateY: "180deg",
    duration: 100,
  })
  .add({
    targets: "#quiz-car-svg",
    translateX: [2000, -1500],
  });

  var quizCarWheel = anime({
    targets: "#Quiz_Car_Back_Wheel, #Quiz_Car_Front_Wheel",
    easing: "linear",
    rotate: "360deg",
    duration: 500,
    loop: true,
  });

  tippy('.quizzy-tooltip', {
      content: '<p class="tooltip-text">Quizzy is an online quiz app that aims to test children\'s knowledge on parts and anatomies of vehicles.</p>', 
      allowHTML: true, //allow HTML in tippy content
      placement: 'bottom'
  });

  tippy('#player-name', {
    content: '<p class="tooltip-text">Click on me to change your name!</p>', 
    allowHTML: true, //allow HTML in tippy content
    placement: 'bottom'
  });

    $("#name-button").click(function() {
      name = $(".name-field").val();
      $("#player-name").html("Hello " + name + "!");
      console.log("player's name is " + name);
    });

    const bicycleQuestions = [
      {
        'q': 'How many wheels are on a bicycle?',
        'options': [
          '2 Wheels',
          '20 Wheels',
          '200 Wheels',
          '2000 Wheels'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct! Let\'s move on!',
        'incorrectResponse': 'That\'s not right... Try again!'
      },
      {
        'q': 'What is the name of the highlighted part?<img src="images/bicycleq2.png" alt="Bicycle Image Seat Highlight"/>',
        'options': [
          'Handlebar',
          'Frame', 
          'Seat',
          'Chain'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Let\'s move on!',
        'incorrectResponse': 'That\'s not right... Try again!'
      },
      {
        'q': 'What is the name of the highlighted part?<img src="images/bicycleq3.png" alt="Bicycle Image Wheel Highlight"/>',
        'options': [
          'Seat',
          'Chain',
          'Brakes',
          'Wheels'
        ],
        'correctIndex': 3,
        'correctResponse': 'Correct! Let\'s move on!',
        'incorrectResponse': 'That\'s not right... Try again!'
      },
      {
        'q': 'How do you control the direction of a bicycle?',
        'options': [
          'With the pedals',
          'With the handlebar',
          'With the wheels',
          'With the seat'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! Let\'s move on!',
        'incorrectResponse': 'That\'s not right... Try again!'
      },
      {
        'q': 'What do you use to slow a bicycle down?',
        'options': [
          'The seat',
          'The brakes',
          'The pedals',
          'The handlebar'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! Let\'s move on!',
        'incorrectResponse': 'That\'s not right... Try again!'
      },
      {
        'q': 'What is the colour of Quizzy\'s bicycle frame?',
        'options': [
          'Red',
          'White',
          'Brown',
          'Blue'
        ],
        'correctIndex': 3,
        'correctResponse': 'Correct! Let\'s move on!',
        'incorrectResponse': 'That\'s not right... Try again!'
      }
    ];

    $('#quiz-bicycle').quiz({
      questions: bicycleQuestions,
      allowIncorrect: false,
      resultsFormat: 'Quiz finished! Well done! <div><a href="#section2" id="quiz-home-btn" class="quiz-button">Back to Menu</a><div>',
      startScreen: '#quiz-bicycle-start-screen',
      startButton: '#quiz-bicycle-start-btn',
      homeCallback: function(){
        level1Complete = true;
        console.log("quiz is completed = " + level1Complete);
        location.href = "#section2";
      }
    });

    // const carQuestions = [
    //   {
    //     'q': 'How many wheels does a car have?',
    //     'options': [
    //       '8 Wheels',
    //       '1 Wheel',
    //       '4 Wheels',
    //       '10 Wheels'
    //     ],
    //     'correctIndex': 2,
    //     'correctResponse': 'Correct! Let\'s move on!',
    //     'incorrectResponse': 'That\'s not right... Try again!'
    //   },
    //   {
    //     'q': 'Where will you typically find a car\'s engine?',
    //     'options': [
    //       'The hood',
    //       'The back seat', 
    //       'The trunk',
    //       'The driver\'s seat'
    //     ],
    //     'correctIndex': 0,
    //     'correctResponse': 'Correct! Let\'s move on!',
    //     'incorrectResponse': 'That\'s not right... Try again!'
    //   },
    //   {
    //     'q': 'How do you usually measure a car\'s speed?',
    //     'options': [
    //       'Kilometers per hour (km/h)',
    //       'Nanometers per nanosecond (nm/ns)',
    //       'Centimeters per second (cm/s)',
    //       'Gigameters per day (Gm/d)'
    //     ],
    //     'correctIndex': 0,
    //     'correctResponse': 'Correct! Let\'s move on!',
    //     'incorrectResponse': 'That\'s not right... Try again!'
    //   },
    //   {
    //     'q': 'Which of these is NOT an American car brand?',
    //     'options': [
    //       'Ford',
    //       'Chevrolet',
    //       'Tesla',
    //       'Lexus'
    //     ],
    //     'correctIndex': 3,
    //     'correctResponse': 'Correct! Let\'s move on!',
    //     'incorrectResponse': 'That\'s not right... Try again!'
    //   },
    //   {
    //     'q': 'How often should a car be sent for servicing?',
    //     'options': [
    //       'Every month',
    //       'Every year',
    //       'Every 3 years',
    //       'Every 5 years'
    //     ],
    //     'correctIndex': 1,
    //     'correctResponse': 'Correct! Let\'s move on!',
    //     'incorrectResponse': 'That\'s not right... Try again!'
    //   },
    //   {
    //     'q': 'What materials are used to manufacture the car\'s exterior?',
    //     'options': [
    //       'Steel and Aluminum',
    //       'Silver and Gold',
    //       'Iron and Copper',
    //       'Titanium and Lead'
    //     ],
    //     'correctIndex': 0,
    //     'correctResponse': 'Correct! Let\'s move on!',
    //     'incorrectResponse': 'That\'s not right... Try again!'
    //   }
    // ];

    // $('#quiz-car').quiz({
    //   questions: carQuestions,
    //   allowIncorrect: false,
    //   resultsFormat: 'Quiz finished! Well done! <div><a href="#section2" id="quiz-car-finish" class="quiz-button">Back to Menu</a><div>',
    //   startScreen: '#quiz-car-start-screen',
    //   startButton: '#quiz-car-start-btn',
    //   // homeButton: '#quiz-bicycle-home-btn',
    //   // restartButton: '#quiz-bicycle-restart-btn',
    // });

    $('#fullpage').fullpage({ //initialize
      //set options
      sectionsColor: ['#4173b5', '#cee1fa', '#4173b5', '#4173b5'],
      navigation: false,
      controlArrows: false,
      anchors: ['section1', 'section2', 'section3', 'section4'],
      afterLoad: function (origin, destination, direction) {
        if (destination.index== 0) { // section 1
          if(welcomeLoaded == false) {
            welcomeSection.play();
            welcomeLoaded = true;
          }
        } else if (destination.index == 1) { // section 2
            if(level1Complete == true) {
              $("#level2-button").removeClass("btn disabled level-disabled");
              $("#level2-icon").removeClass("bi-lock-fill").addClass("bi-play-circle-fill");
              car.play();
              carWheel.play();
            }
            if(level2Complete == true) {
              $("#level3-button").removeClass("btn disabled level-disabled");
              $("#level3-icon").removeClass("bi-lock-fill").addClass("bi-play-circle-fill");
            }
            mainSection.play();
        } else if (destination.index == 2) { // section 3
            quizSection.play();
        } else if (destination.index == 3) { // section 4
          console.log("Hello");
        }
    }
  });
  
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);

});