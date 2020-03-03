import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      items: {},
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://api.musixmatch.com/ws/1.1/track.search?q_artist=enya&page_size=10&page=1&s_track_rating=desc&apikey=9be8fb4b24d5d7d4518870f05edaf848')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json.message.body.track_list,
      })
    });
  }
  render() {

let { isLoaded, items } = this.state;

if (!isLoaded) {
  return <div> shit is loading! </div>
}
else {
  return (
    <div className="App">
    {this.state.items.map( ({track}) => {
      return track.track_name;
    })}

    </div>
  );

}

  }
}
export default App;


// {Object.keys(items).map(function(key) {
//   let item = items.message.body.track_list[0][key];
//   console.log(items.message.body.track_list[0].track.track_name);
//   // return item.message.body.track_list[0].track.track_name;
// })}
