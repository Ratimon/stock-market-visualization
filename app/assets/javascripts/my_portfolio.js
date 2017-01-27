
  var quote;

  $( document ).ready(function() {


    if( $('body.users.my_portfolio').length === 0 ){
      return;
    }


    // var jsonData = [
    //         { "StockTicker": "A", "Change": 26 },
    //         { "StockTicker": "B", "Change": 12 },
    //         { "StockTicker": "C", "Change": -17 },
    //         { "StockTicker": "D", "Change": 6 },
    //         { "StockTicker": "E", "Change": 4 }
    //     ];
    //
    //
    //           var svgWidth = 600;
    //           var svgHeight = 550;
    //           var padding = 15
    //
    //            var svg = d3.select(".row-fluid")
    //                .append("svg")
    //                .attr("width", svgWidth)
    //                .attr("height", svgHeight)
    //                .append("g")
    //                .attr("transform", "translate(" +50 + "," + 0 + ")");
    //
    //           //Set up scales
    //           var xScale = d3.scale.ordinal()
    //                .domain(jsonData.map(function(d) { return d.StockTicker; }))
    //               //  .rangeRoundBands([0, svgWidth], .1);
    //                .rangeRoundBands([padding, padding+svgHeight], .1);
    //
    //           var yScale = d3.scale.linear()
    //               //  .domain([-100, 100])
    //                .domain(d3.extent(jsonData, function(d) { return d.Change; }))
    //                .range([svgWidth+padding, padding]);
    //
    //
    //           // Create bars
    //            svg.selectAll("rect")
    //                .data(jsonData)
    //                .enter().append("rect")
    //                .attr("x", function (d) { return xScale(d.StockTicker) ; })
    //                .attr("y", function (d) { return yScale(Math.max(0, d.Change)); })
    //                .attr("height", function (d) { return Math.abs(yScale(d.Change) - yScale(0)); })
    //               //  .attr("width", xScale.rangeBand())
    //                .attr("width", (svgWidth / jsonData.length)-padding-35)
    //
    //                .attr("fill", function (d) {
    //                             if (d.Change === 0) {return "#959595"}
    //                             else if (d.Change > 0) {return "green"}
    //                             else {return "red"}
    //                       });
    //
    //             //To format axis as a percent
    //         		var formatPercent = d3.format("%2");
    //
    //             //Create x axis
    //             var xAxis = d3.svg.axis()
    //             .scale(xScale)
    //             .orient("bottom");
    //
    //             svg.append("g")
    //             .attr("class", "x axis")
    //             .attr("transform", "translate(0,0)")
    //             .call(xAxis);
    //
    //         		//Create y axis
    //         		var yAxis = d3.svg.axis()
    //             .scale(yScale)
    //             .orient("left")
    //             .ticks(5).tickFormat(formatPercent);
    //
    //             svg.append("g")
    //     				.attr("class", "y axis")
    //     				.attr("transform", "translate(0,0)")
    //     				.call(yAxis);




//
//     checkStocks = function(){
//       console.log('checkStocks()');
//       var arr = $('tbody tr').map(function(){
//         // debugger
//         return $(this).attr('class')
//       }).get();
//
//       var url = "//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol IN ('"+arr.join("','") +"')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=quote"
//
//       console.log('call ajax', url);
//       $.ajax({
//         url: url,
//         dataType: "jsonp",
//         jsonp: "callback",
//         jsonpCallback: "quote"
//     });
//
//     quote = function(data) {
//       // debugger;
//         console.log('quote', data);
//         var results = data.query.results.quote;
//         // If the quote is not an array, we'll use the whole object.
//         // !storeObj
//         // debugger;
//         if(results.length === undefined){
//           var temp = results;
//           results = [temp];
//         }
//
//         for (var i = 0; i < results.length; i++) {
//
//           var stock_code_class = '.' + results[i].symbol;
//           var storeObj = results[i]
//
//
//
//           var lastTradePrice = storeObj.LastTradePriceOnly
//           var price_change = storeObj.Change
//           var closed_price = parseFloat(Math.round((lastTradePrice - price_change) * 100) / 100).toFixed(2);
//           $(stock_code_class).find('.closed_price').text(closed_price)
//           $(stock_code_class).find('.last_trade_time').text(storeObj.LastTradeDate+" at "+storeObj.LastTradeTime)
//           $(stock_code_class).find('.current_price').text(lastTradePrice)
//           $(stock_code_class).find('.change').text(price_change)
//           $(stock_code_class).find('.volume').text(storeObj.Volume)
//
//           if (price_change.substring(0,1) === '+') {
//               $(stock_code_class).find('.change').addClass("priceup");
//           } else if (price_change.substring(0,1) === '-') {
//               $(stock_code_class).find('.change').addClass("pricedown")
//           } else {
//               $(stock_code_class).find('.change').text('No Change')
//           }
//
//          }//for
//
//       };
//   };
//
//   function mytimeout() {
//     setTimeout(function () {
//       checkStocks()
//       mytimeout();
//     }, 5000);
//   }
//  // setInterval( function(){ checkStocks(); }, 5000)
//   // checkStocks(); // always
//
//
//
//


  });
