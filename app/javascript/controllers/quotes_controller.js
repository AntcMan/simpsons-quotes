import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="quotes"
export default class extends Controller {
  static targets = ["quotes"]
  refresh() {
    fetch("/quotes")
    .then(response => response.json())
      .then(data => {
        this.quotesTarget.innerHTML = "";
        data.forEach(quote => {
          const quoteHtml = `
            <p>${quote.content}</p>
            <p>${quote.character}</p>
          `;
          this.quotesTarget.insertAdjacentHTML("beforeend", quoteHtml);
        });
      });
  }
}
