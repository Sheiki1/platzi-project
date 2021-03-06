function saludoConInput() {
  // document.getElementById consigue un elemento del DOM por su identificador (id)
  let nameInput = document.getElementById("nameInput");
  // De esta forma obtenemos el texto colocado dentro del input
  let name = nameInput.value;
  // Object.innerHTML = ... inserta elemento html o texto dentro del objeto
  let element = document.getElementById("resultado");
element.innerHTML = "Hola " + name + '... Bienvenidx! '

}

function elegirHistoria() {
  let element = document.getElementById("elegisteHistoria");
  element.innerHTML = "Elegiste Historia"
  const myQuestions =[{
    question: "1. Creador del Arte Pop:",
    answers: {
        a: 'Jean Michel Basquiat',
        b: 'Andy Wharhol',
        c: 'Antonio García',
        d: 'Ai Wei Wei'
      
    },
    correctAnswer: 'b'
},
{
    question: "2. Pintó la Última Cena:",
    answers: {
        a: 'Miguel Angel',
        b: 'Sandro Boticelli',
        c: 'El Greco',
        d: 'Leonardo Da Vinci'
    },
    correctAnswer: 'd'
},
{
    question: "3. ¿Cuál de estas no es una obra de Frida Kahlo?:",
    answers: {
        a: 'Naturaleza Muerta',
        b: 'El Siervo Herido',
        c: 'Sueño de una tarde de verano',
        d: 'La Columna Rota'
    },
    correctAnswer: 'c'
}



]
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

}

function elegirArte() {
  let element = document.getElementById("elegisteArte");
  element.innerHTML ="Elegiste Arte"
  const myQuestions =[{
    question: "1. Creador del Arte Pop:",
    answers: {
        a: 'Jean Michel Basquiat',
        b: 'Andy Wharhol',
        c: 'Antonio García',
        d: 'Ai Wei Wei'
      
    },
    correctAnswer: 'b'
},
{
    question: "2. Pintó la Última Cena:",
    answers: {
        a: 'Miguel Angel',
        b: 'Sandro Boticelli',
        c: 'El Greco',
        d: 'Leonardo Da Vinci'
    },
    correctAnswer: 'd'
},
{
    question: "3. ¿Cuál de estas no es una obra de Frida Kahlo?:",
    answers: {
        a: 'Naturaleza Muerta',
        b: 'El Siervo Herido',
        c: 'Sueño de una tarde de verano',
        d: 'La Columna Rota'
    },
    correctAnswer: 'c'
}



]
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

}



