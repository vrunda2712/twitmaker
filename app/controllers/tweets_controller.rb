class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweet.save
    tweet_json = JSON.parse(@tweet.to_json)
    tweet_json[:date] = @tweet.created_at.strftime('%b %e, %l:%M %p')
    render :json => tweet_json
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
