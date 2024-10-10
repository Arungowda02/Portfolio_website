// navbar script

document.getElementById("profile-name").onclick = function () {
  document.getElementById("profile-popup").style.display = "flex";
};

document.getElementById("close-popup").onclick = function () {
  document.getElementById("profile-popup").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("profile-popup")) {
    document.getElementById("profile-popup").style.display = "none";
  }
};

// Continuous Text Movement Animation

const developerText = "Java Developer";
const textElement = document.getElementById("developer-text");

function getRandomPosition() {
  const x = Math.floor(Math.random() * 200 - 100) + "px";
  const y = Math.floor(Math.random() * 200 - 100) + "px";
  const rotation = Math.floor(Math.random() * 360) + "deg";
  return { x, y, rotation };
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function animateText() {
  developerText.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.classList.add("letter");
    span.textContent = char;

    span.style.color = getRandomColor();

    const { x, y, rotation } = getRandomPosition();
    span.style.setProperty("--random-x", x);
    span.style.setProperty("--random-y", y);
    span.style.setProperty("--random-rotation", rotation);

    span.style.animationDelay = `${index * 0.1}s`;

    textElement.appendChild(span);
  });
}

window.onload = animateText;

// Profile Info Display
document.querySelector(".profile-pic").addEventListener("click", function () {
  document.getElementById("profile-info").style.display = "block";
});

// Function to show the skill popup

const skillData = {
  Java: {
    name: "Java",
    rating: "Rating: 4/5",
    description:
      "Knowledge on Core Java including OOPS concept," +
      "Exceptions, DSA, Collection frameworks, Java 8 features. Along with advanced java JDBC, Servlets, JSP etc. Good in Hibernate and Spring Boot freameworks." +
      "Additionally I know on java testing using Selenium and basic of this.",
  },
  Python: {
    name: "Python",
    rating: "Rating: 2.5/5",
    description:
      "I know the basic knowledge on Python it includes Data types, Data Structures(List, tuple, set etc)" +
      " Functions, OOPS concepts and File handling etc. And Basic of Flask and numpy libraries.",
  },
  JavaScript: {
    name: "JavaScript",
    rating: "Rating: 2.5/5",
    description:
      "Knowledge on Variables, Data types, Operators, Arrays, Strings etc. And OPPS concepts, DOM manipulations" +
      " Event handling, Functions, Scopes etc.",
  },
  HTML: {
    name: "HTML & CSS",
    rating: "Rating: 4/5",
    description:
      "Good knowledge on Tags and comments, arrangements, links, script etc.",
  },
  CSS: {
    name: "CSS",
    rating: "Rating: 3.5/5",
    description:
      "Good knowledge on Tags and comments, arrangements, links, script etc.",
  },
  AWS: {
    name: "AWS Cloud Computing",
    rating: "Rating: 2.5/5",
    description:
      "Basic knowledge on creating EC2 Instances, VPC, subnets, route tables, Internet gateway, nat gateway, Security groups etc.",
  },
  MySQL: {
    name: "MySQL",
    rating: "Rating: 4/5",
    description:
      "Good Knowledge in CRUD operations, Data types, constraints, aggregate functions, sub queries, Join operations, Views and Stored procedure etc.",
  },
};

// Event listener for skill icons
document.querySelectorAll(".skill-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    const skill = icon.getAttribute("data-skill");

    const selectedSkill = skillData[skill];

    document.getElementById("skill-name").textContent = selectedSkill.name;
    document.getElementById("skill-proficiency").textContent =
      selectedSkill.rating;
    document.getElementById("skill-description").textContent =
      selectedSkill.description;

    const popup = document.getElementById("skill-info");
    popup.classList.add("show");
    setTimeout(() => {
      popup.style.opacity = "1";
    }, 10);
  });
});

// Close button functionality
document.getElementById("close-skill").addEventListener("click", function () {
  const popup = document.getElementById("skill-info");
  popup.style.opacity = "0";
  setTimeout(() => {
    popup.classList.remove("show");
  }, 300);
});
