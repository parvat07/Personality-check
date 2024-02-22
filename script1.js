
function calculateTotal() {
    let totalResults = [0, 0, 0, 0];

    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 4; j++) {
        const answer = parseInt(document.getElementById(`q${i}a${j}`).value) || 0;
        totalResults[j - 1] += answer;
      }
    }

    const totalResultsText = `
      Total for Answer 1: ${totalResults[0]}<br>
      Total for Answer 2: ${totalResults[1]}<br>
      Total for Answer 3: ${totalResults[2]}<br>
      Total for Answer 4: ${totalResults[3]}
    `;

    document.getElementById('resultContainer').innerHTML = totalResultsText;
  }

