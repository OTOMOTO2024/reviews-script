function fetchReviews() {
  const sheetId = '1Y0w8JfFjMrvU_1MEyLtjx8J6CJDAhcEEgdQTkT6vW'; // Remplacez par l'ID de votre feuille Google Sheets
  const url = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const reviews = data.feed.entry;
      const container = document.getElementById('reviews-container');
      reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
          <p><strong>${review.gsx$reviewer.$t}</strong></p>
          <p>Rating: ${review.gsx$rating.$t}</p>
          <p>${review.gsx$text.$t}</p>
          <p>${review.gsx$time.$t}</p>
        `;
        container.appendChild(reviewElement);
      });
    })
    .catch(error => console.error('Error fetching reviews:', error));
}

document.addEventListener('DOMContentLoaded', fetchReviews);
