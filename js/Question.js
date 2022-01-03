class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
    this.question = createElements("h3")
    this.button = createElements("h4")
    this.input2 = createElements("h4")

  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.question.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What has a head in the night, but not in the day?")
    this.question.position(130,210);
    this.input2.position(170, 250);
    this.input1.position(150, 230);
    this.button.position(290, 300);
    

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you! Your answer has been submitted");
      this.message.position(200,200);
this.message.display();

     
    })


  }
}
