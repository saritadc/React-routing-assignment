import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
    };
  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((data) => {
        console.log({ data });

        this.setState({ usersList: data.data });
      });
  }

  render() {
    return(
      <div>
        <h1>Users List</h1>
        {
          this.state.usersList.map(user =>{
            return(
              <div>
                <h2>Name: {user.employee_name }</h2>
                <p>ID: {user.id}</p>
                <p>Age: {user.employee_age}</p>
                <p>Salary: {user.employee_salary}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Gallery;
