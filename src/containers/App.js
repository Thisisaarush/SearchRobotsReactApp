import React from 'react';
import CardList from '../components/CardList';
import '../css/App.css';
import SearchBox from '../components/searchBox';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({
        robots: users,
      });
    })
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  render () {

    const filteredResult = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <div>
        <div className='header-container'>
          <h1 id='header-title'>Chitti Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <CardList robots={ filteredResult }/>
      </div>
    );
  }
  
}
export default App;