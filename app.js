function analyzeChart() {
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  loader.style.display = "block";
  result.style.display = "none";

  fetch("/analyze", {
    method: "POST"
  })
  .then(res => res.json())
  .then(data => {
    loader.style.display = "none";
    result.style.display = "block";

    result.innerHTML = `
      <h3>Signal Result</h3>
      <p><b>Market:</b> ${data.market}</p>
      <p><b>Pair:</b> ${data.pair}</p>
      <p><b>Direction:</b> ${data.direction}</p>
      <p><b>Entry:</b> ${data.entry}</p>
      <p><b>TP:</b> ${data.tp}</p>
      <p><b>SL:</b> ${data.sl}</p>
      <p><b>Confidence:</b> ${data.confidence}%</p>
      <p style="color:#22c55e;">${data.comment}</p>
    `;
  });
}
