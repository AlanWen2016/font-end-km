function Archiver() {
    var temperature = null;
    var archive = [];
  
    Object.defineProperty(this, 'temperature', {
      get: function() {
        console.log('get!');
        return temperature;
      },
      set: function(value) {
        temperature = value;
        archive.push({ val: temperature });
      }
    });
  
    this.getArchive = function() { return archive; };
  }


  function ScoreReport() {
      var score = null;
      var report = [];

      Object.defineProperty(this, 'score',{
          configurable: true,
          enumerable: true,
          get: function() {
              console.log('getter')
              return score
          },
          set: function(val) {
              score =  val;
              report.push({score: val});
              console.log('setter')
          }
      })
      this.getReport = function() {
          return report;
      }
  }

  let re = new ScoreReport();
  re.score = 1234;
  re.score = 2222;

  console.log(re.getReport());