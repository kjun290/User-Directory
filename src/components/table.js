import React from "react";
import API from "../utils/API"
import Search from "../components/search"
import "../css/table.css"


class Table extends React.Component {

  state = {
    sortOrder: "",
    results: [],
    search: ""
  }

  componentDidMount() {
    API.ApiSearch()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
      }).catch(err => console.log(err))
  }


  handleInputChange = event => {

    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm
      })
    }
  }

  sortByFName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }

  sortByLName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }

  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange}
          search={this.state.search} />

        <div className="table">
        <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB </th>
              </tr>
            </thead>

            {this.state.results && this.state.results.map(item =>
                item.name.first.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} alt="thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone}</td>
                      <td >{item.email}</td>
                      <td>{item.dob.date}</td>  
                    </tr>
                  </tbody>

                  :
                
                  item.name.last.toLowerCase().includes(this.state.search) ?
                    <tbody key={item.login.uuid}>
                      <tr>
                      <td ><img src={item.picture.thumbnail} alt="thumbnail" /></td>
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone} </td>
                        <td >{item.email}</td>
                        <td>{item.dob.date}</td>  
                      </tr>
                    </tbody>
                    :
                    null
              )}
          </table>
        </div>
      </div>
    )
  }
}

export default Table;