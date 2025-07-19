document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = {
    q1: "C",
    q2: "A",
    q3: "C",
    q4: "C",
    q5: "C",
    q6: "D"
  };

  let correct = 0;

  for (let q in answers) {
    const selected = document.querySelector(`input[name=${q}]:checked`);
    if (selected && selected.value === answers[q]) {
      correct++;
    }
  }

  if (correct === Object.keys(answers).length) {
    document.getElementById("result").classList.add("show");
  } else {
    alert("Almost there! Try again and show Mum you really know her!");
  }
});

