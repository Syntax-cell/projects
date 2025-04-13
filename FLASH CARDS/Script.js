// Flashcards data
const flashcards = [
    { front: "What is HTML?", back: "HyperText Markup Language" },
    { front: "What is CSS?", back: "Cascading Style Sheets" },
    { front: "What is jQuery?", back: "A JavaScript library" },
    { front: "What is JavaScript?", back: "A programming language" },
    { front: "What is Bootstrap?", back: "A CSS framework" },
    { front: "What is React?", back: "A JavaScript library for building UIs" },
    { front: "What is Angular?", back: "A web application framework" },
    { front: "What is Vue.js?", back: "A progressive JavaScript framework" },
    { front: "What is Node.js?", back: "JavaScript runtime built on Chrome's V8 engine" },
    { front: "What is Express.js?", back: "A web application framework for Node.js" },
    { front: "What is MongoDB?", back: "A NoSQL database" },
    { front: "What is SQL?", back: "Structured Query Language" },
    { front: "What is REST?", back: "Representational State Transfer" },
    { front: "What is GraphQL?", back: "A query language for APIs" },
    { front: "What is AJAX?", back: "Asynchronous JavaScript and XML" },
    { front: "What is JSON?", back: "JavaScript Object Notation" },
    { front: "What is API?", back: "Application Programming Interface" },
];

// Start from the first card
let currentIndex = 0;

// Function to show the card
function showCard(index) {
    $("#flashcard .front").text(flashcards[index].front);
    $("#flashcard .back").text(flashcards[index].back);
    $("#flashcard").removeClass("flipped");
}

// Show the first card when page loads
$(document).ready(function () {
    showCard(currentIndex);

    // Flip the card on button click
    $("#flipBtn").click(function () {
        $("#flashcard").toggleClass("flipped");
    });

    // Go to next card
    $("#nextBtn").click(function () {
        if (currentIndex < flashcards.length - 1) {
            currentIndex++;
            showCard(currentIndex);
        }
    });

    // Go to previous card
    $("#prevBtn").click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            showCard(currentIndex);
        }
    });
    $(".dark").click(function () {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
            $("dark").text("🌙");
        } else {
            $("dark").text("🌞");
        }
    });
});

