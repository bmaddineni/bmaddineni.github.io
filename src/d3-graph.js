  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 40, bottom: 30, left: 30},
      width = 450 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
console.log(margin+"<<< Margin value");
console.log(width+"<<< Width value");
console.log(height+"<<< height value");
console.log(top+"<<< top value");
console.log(top+"<<< top value");

  // append the svg object to the body of the page
  var sVg = d3.select("#Area")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    // translate this svg element to leave some margin.
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X scale and Axis
  var x = d3.scaleLinear()
      .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, width]);       // This is the corresponding value I want in Pixel
  sVg
    .append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // X scale and Axis
  var y = d3.scaleLinear()
      .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
      .range([height, 0]);       // This is the corresponding value I want in Pixel
  sVg
    .append('g')
    .call(d3.axisLeft(y));




  var margin = {
      top: 10, right: 40,
      bottom: 30,
      left: 30
    },
    width = 450 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
  var svg_margin_scale = d3
    .select("#div_margin_scale")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x_axis = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

  svg_margin_scale.append('g')
    .attr("transform", "translate(0, " + height + ")")
    .call(d3.axisBottom(x_axis));


  var y_axis = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  svg_margin_scale.append('g')
    .attr("transform", "translate(0, " + height + ")")
    .call(d3.axisBottom(x_axis));

svg_margin_scale.append('g')
    .call(d3.axisLeft(y_axis));;

  var svg = d3.select("#dataviz_area");
  var svg_scale = d3.select("#dataviz_area_scale");
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400]);
  console.log(x(25));
  svg_scale.call(d3.axisBottom(x));

  svg.append("circle")
    .attr("cx", 2)
    .attr("cy", 2)
    .attr("r", 50)
    .style("fill", "red")

  svg.append("circle")
    .attr("cx", 140)
    .attr("cy", 140)
    .attr("r", 50)
    .style("fill", "orange")

  svg.append("circle")
    .attr("cx", 300)
    .attr("cy", 300)
    .attr("r", 50)
    .style("fill", "blue")

  svg_scale.append("circle")
    .attr("cx", x(10))
    .attr("cy", 100)
    .attr("r", 40)
    .style("fill", 'red')

  svg_scale.append("circle")
    .attr("cx", x(50))
    .attr("cy", 100)
    .attr("r", 40)
    .style("fill", 'green')

  svg_scale.append("circle")
    .attr("cx", x(100))
    .attr("cy", 100)
    .attr("r", 40)
    .style("fill", 'blue')
