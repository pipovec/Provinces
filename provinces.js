class Provinces extends React.Component {
    constructor(props) {
        super(props);
        this.getProvinceData = this.getProvinceData.bind(this);
        this.state = { province: ''};
        
        this.getProvinceData();
    }
  
    getProvinceData() {
        var url = "https://api.worldoftanks.eu/wot/globalmap/clanprovinces/?application_id=883ff6ceefb13177357ffea34d6fb06f&fields=front_name%2Carena_name%2Cturns_owned%2Cdaily_revenue%2Cprovince_name%2Cmax_vehicle_level&clan_id="+ this.props.clan_id;    
        var xhr = new XMLHttpRequest();
        
        xhr.onload = function() {
        var jsondata = xhr.responseText;
        this.setState({ province: JSON.parse(jsondata)});
        
        }.bind(this);
        xhr.open('GET', url , true);
        xhr.send();
  
  
    }
    
    render() {   
        
        var data = this.state.province.data;
        var content = "";
        if(typeof(data) === 'object') {        
          var c  = data[this.props.clan_id];       
          
          content = c.map((c) =>
          <tr key={ c.province_name}>             
             <td> { c.province_name} </td>
             <td> { c.arena_name} </td>
             <td className="text-center">{ c.max_vehicle_level} </td>
             <td className="text-center">{ c.turns_owned} </td>
             <td className="text-center">{ c.daily_revenue} </td>
          </tr>
          
          );
          
        }
       
        return (
            
            <div>
                <hr /><h5><strong> Provincie klanu: </strong></h5>
               <table className="table table-striped table-condensed">              
                  <thead>
                      <tr>                          
                          <th>Uzemie</th>
                          <th>Mapa</th>
                          <th>Level</th>
                          <th>Pocet kol</th>
                          <th>Denny prijem</th>
                      </tr>
                  </thead>
                  <tbody>        
                  { content}
                  </tbody>
                </table>
                <hr />
            </div>
        );
    }
  }

ReactDOM.render(<Provinces clan_id = { {php  echo $clan_id;} }/>, 
document.getElementById('clanProvince'));
