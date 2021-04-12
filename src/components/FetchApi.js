import React from "react";
let arrayData;

export default class FetchApiData extends React.Component {
  
  state = {
    loading: true,
    people: {}
  };

  async componentDidMount() {
    arrayData = [];
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.students, loading: false })
    arrayData.push(this.state.people[0]);
    console.log(arrayData);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.people ? 
          <div>loading...</div> 
        :
        <div>{arrayData}</div>}
      </div>
    )
  }
}

