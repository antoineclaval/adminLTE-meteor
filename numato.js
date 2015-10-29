if (Meteor.isClient) {
    Meteor.startup(function(){
       //jvectormap data
        var visitorsData = {
          "US": 398, //USA
          "SA": 400, //Saudi Arabia
          "CA": 1000, //Canada
          "DE": 500, //Germany
          "FR": 760, //France
          "CN": 300, //China
          "AU": 700, //Australia
          "BR": 600, //Brazil
          "IN": 800, //India
          "GB": 320, //Great Britain
          "RU": 3000 //Russia
        };
        //World map by jvectormap
        $('#world-map').vectorMap({
          map: 'world_mill_en',
          backgroundColor: "transparent",
          regionStyle: {
            initial: {
              fill: '#e4e4e4',
              "fill-opacity": 1,
              stroke: 'none',
              "stroke-width": 0,
              "stroke-opacity": 1
            }
          },
          series: {
            regions: [{
                values: visitorsData,
                scale: ["#92c1dc", "#ebf4f9"],
                normalizeFunction: 'polynomial'
              }]
          },
          onRegionLabelShow: function (e, el, code) {
            if (typeof visitorsData[code] != "undefined")
              el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
          }
        });
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup


  });
}
