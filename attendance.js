document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const desired = parseFloat(document.getElementById("desired").value);
  const attended = parseInt(document.getElementById("attended").value);
  const total = parseInt(document.getElementById("total").value);
  const resultDiv = document.getElementById("result");

  if (desired < 0 || desired > 100) {
    resultDiv.innerText = " Desired attendance must be between 0 and 100!";
    return;
  }

  if (attended > total) {
    resultDiv.innerText = " Lectures attended cannot be more than total lectures!";
    return;
  }

  if (attended < 0 || total < 0) {
    resultDiv.innerText = " Values cannot be negative!";
    return;
  }

  const percentage = (attended / total) * 100;
  let message = ` Current Attendance: ${percentage.toFixed(2)}%\n`;

  if (percentage > desired) {
    const chutti = Math.floor(((attended / desired) * 100) - total);
    message += chutti > 0 ? ` You can take ${chutti} more chutti (leave)!` : ` No chutti for now.`;
  } else if (percentage < desired) {
    const lecturesNeeded = Math.floor((100 * attended - desired * total) / (desired - 100));
    message += ` You need to attend ${lecturesNeeded} more lectures.`;
  } else {
    message += " You're already at your desired attendance!";
  }

  resultDiv.innerText = message;
});
