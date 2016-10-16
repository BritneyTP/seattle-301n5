(function(module) {

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  function populateFilters(){}

  populateFilters.statesPop = function(){
    webDB.execute([{
      'sql': 'SELECT DISTINCT state FROM zips ORDER BY state ',
    }
  ],
  function(result){
    result.forEach(function(ind){
      $('#state-select').append('<option>' + ind.state + '</option>')

    })

  }
);
};

populateFilters.cityPop = function(){
  $('#state-select').on('change', function(){
    webDB.execute([{
      'sql': 'SELECT DISTINCT city FROM zips WHERE state = ? ORDER BY city',
      'data' : [$('#state-select').val()]
    }
  ],
  function(result){
    result.forEach(function(ind){
      $('#city-select').append('<option>' + ind.city + '</option>')
    })
  });
})

}
// TODO: You will also interact with the map.js file here

module.populateFilters = populateFilters;
})(window)
