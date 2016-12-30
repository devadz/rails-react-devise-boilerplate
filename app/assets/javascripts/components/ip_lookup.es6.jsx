class IpLookup extends React.Component {

  constructor(props) {
    super(props)

    let loadMsg = 'Loading data...';
    let errorMsg = 'Error fetching data!';

    this.state = {
      ip: loadMsg,
      country_code: loadMsg,
      country_name: loadMsg,
      zip_code: loadMsg,
      city: loadMsg,
      latitude: loadMsg,
      longitude: loadMsg
    }
  }

  loopkup() {
    $.ajax({
      url:'//freegeoip.net/json/?',
      method: 'GET',
      success: (data) => {
        this.setState({
          ip: data.ip || errorMsg,
          country_code: data.country_code || errorMsg,
          country_name: data.country_name || errorMsg,
          zip_code: data.zip_code || errorMsg,
          city: data.city || errorMsg,
          latitude: data.latitude || errorMsg,
          longitude: data.longitude || errorMsg
        });
      },
      error: (xhr, ajaxOptions, thrownError) => {
        console.log('Error!');
        console.log(xhr);
        $('.list-group').remove();

        $('.panel-body').append( '<div class="alert alert-danger"><strong>' + xhr.statusText + ' (' + xhr.status + ')</strong><br />' + xhr.responseText + '</div>' );
      }
    });
  }

  render () {
    return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Fetched user data</h3>
      </div>
      <div className="panel-body">
        <p>This data is fetched from <a href="http://freegeoip.net/">freegeoip.net</a>, a public HTTP API for software developers to search the geolocation of IP addresses. You're allowed up to 10,000 queries per hour by default. Once this limit is reached, all of your requests will result in HTTP 403, forbidden, until your quota is cleared.</p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">{ this.state.ip }</li>
        <li className="list-group-item">{ this.state.country_code }</li>
        <li className="list-group-item">{ this.state.country_name }</li>
        <li className="list-group-item">{ this.state.zip_code }</li>
        <li className="list-group-item">{ this.state.city }</li>
        <li className="list-group-item">{ this.state.latitude }</li>
        <li className="list-group-item">{ this.state.longitude }</li>
      </ul>
      <div className="panel-footer">
        <strong>React component:</strong> app/assets/javascripts/components/ip_lookup.es6.jsx
      </div>
    </div>
    );
  }

  componentDidMount () {
    this.loopkup();
  }
}
