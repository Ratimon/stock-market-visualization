class User < ActiveRecord::Base
  has_secure_password
  
  has_many :user_stocks
  has_many :stocks, through: :user_stocks

  validates :email, :presence => true, :uniqueness => true, :length => { :minimum => 5 }

  def stock_already_added?(ticker_symbol)
    stock = Stock.find_by_ticker(ticker_symbol)
    return false unless stock
    user_stocks.where(stock_id: stock.id).exists?
  end


end
