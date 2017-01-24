
  var quote;

  $( document ).ready(function() {

    if( $('body.users.my_portfolio').length === 0 ){
      return;
    }

    var checkStocks = function(){

      var arr = $('tbody tr').map(function(){
        // debugger
        return $(this).attr('class')
      }).get();

      $.ajax({
        url: "//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol IN ('"+arr.join("','")+"')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quote",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "quote"
    });

    quote = function(data) {
        console.log(data)

        for (var i = 0; i < arr.length; i++) {

          var stock_code_class = '.' + arr[i];
          // console.log('stock_code_class', stock_code_class);
          var storeObj = data.query.results.quote[i]
          var lastTradePrice = storeObj.LastTradePriceOnly
          var price_change = storeObj.Change
          var closed_price = parseFloat(Math.round((lastTradePrice - price_change) * 100) / 100).toFixed(2);
          $(stock_code_class).find('.closed_price').text(closed_price)
          $(stock_code_class).find('.last_trade_time').text(storeObj.LastTradeDate+" at "+storeObj.LastTradeTime)
          $(stock_code_class).find('.current_price').text(lastTradePrice)
          $(stock_code_class).find('.change').text(price_change)
          $(stock_code_class).find('.volume').text(storeObj.Volume)


          if (price_change.substring(0,1) === '+') {
              $(stock_code_class).find('.change').addClass("priceup");
          } else if (price_change.substring(0,1) === '-') {
              $(stock_code_class).find('.change').addClass("pricedown")
          } else
              $(stock_code_class).find('.change').text('No Change')
        }
    };
  };

  checkStocks();
  setTimeout(checkStocks, 5000);

  });
