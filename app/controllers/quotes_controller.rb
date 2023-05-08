class QuotesController < ApplicationController
  def index
    response = HTTParty.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    quote = response[0] # extract the first quote from the response array
    Quote.create(content: quote["quote"], character: quote["character"])
    @quotes = Quote.all
  end
end
