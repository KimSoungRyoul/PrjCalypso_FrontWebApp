import React, { Component } from "react";

class MyPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
          {/*
                Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"
                Tip 2: you can also add an image using data-image tag
            */}
          <div className="sidebar-wrapper">
            <div className="logo">
              <a href="http://www.creative-tim.com" className="simple-text">
                Creative Tim
              </a>
            </div>
            <ul className="nav">
              <li>
                <a className="nav-link" href="dashboard.html">
                  <i className="nc-icon nc-chart-pie-35" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="./user.html">
                  <i className="nc-icon nc-circle-09" />
                  <p>User Profile</p>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="./table.html">
                  <i className="nc-icon nc-notes" />
                  <p>Table List</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="./typography.html">
                  <i className="nc-icon nc-paper-2" />
                  <p>Typography</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="./icons.html">
                  <i className="nc-icon nc-atom" />
                  <p>Icons</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="./maps.html">
                  <i className="nc-icon nc-pin-3" />
                  <p>Maps</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="./notifications.html">
                  <i className="nc-icon nc-bell-55" />
                  <p>Notifications</p>
                </a>
              </li>
              <li className="nav-item active active-pro">
                <a className="nav-link active" href="upgrade.html">
                  <i className="nc-icon nc-alien-33" />
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          {/*Navbar*/}
          <nav className="navbar navbar-expand-lg " color-on-scroll="500">
            <div className=" container-fluid  ">
              <a className="navbar-brand" href="jsx-a11y/href-no-hash">
                {" "}
                Table List{" "}
              </a>
              <button
                href=""
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar burger-lines" />
                <span className="navbar-toggler-bar burger-lines" />
                <span className="navbar-toggler-bar burger-lines" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul className="nav navbar-navc mr-auto">
                  <li className="nav-item">
                    <a
                      href="jsx-a11y/href-no-hash"
                      className="nav-link"
                      data-toggle="dropdown"
                    >
                      <i className="nc-icon nc-palette" />
                      <span className="d-lg-none">Dashboard</span>
                    </a>
                  </li>
                  <li className="dropdown nav-item">
                    <a
                      href="jsx-a11y/href-no-hash"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                    >
                      <i className="nc-icon nc-planet" />
                      <span className="notification">5</span>
                      <span className="d-lg-none">Notification</span>
                    </a>
                    <ul className="dropdown-menu">
                      <a className="dropdown-item" href="jsx-a11y/href-no-hash">
                        Notification 1
                      </a>
                      <a className="dropdown-item" href="jsx-a11y/href-no-hash">
                        Notification 2
                      </a>
                      <a className="dropdown-item" href="jsx-a11y/href-no-hash">
                        Notification 3
                      </a>
                      <a className="dropdown-item" href="jsx-a11y/href-no-hash">
                        Notification 4
                      </a>
                      <a className="dropdown-item" href="jsx-a11y/href-no-hash">
                        Another notification
                      </a>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nc-icon nc-zoom-split" />
                      <span className="d-lg-block">&nbsp;Search</span>
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#pablo">
                      <span className="no-icon">Account</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="http://example.com"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="no-icon">Dropdown</span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pablo">
                      <span className="no-icon">Log out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*End Navbar*/}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card strpied-tabled-with-hover">
                    <div className="card-header ">
                      <h4 className="card-title">Striped Table with Hover</h4>
                      <p className="card-category">
                        Here is a subtitle for this table
                      </p>
                    </div>
                    <div className="card-body table-full-width table-responsive">
                      <table className="table table-hover table-striped">
                        <thead>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Salary</th>
                          <th>Country</th>
                          <th>City</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>$23,789</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Doris Greene</td>
                            <td>$63,542</td>
                            <td>Malawi</td>
                            <td>Feldkirchen in Kärnten</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Mason Porter</td>
                            <td>$78,615</td>
                            <td>Chile</td>
                            <td>Gloucester</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card card-plain table-plain-bg">
                    <div className="card-header ">
                      <h4 className="card-title">Table on Plain Background</h4>
                      <p className="card-category">
                        Here is a subtitle for this table
                      </p>
                    </div>
                    <div className="card-body table-full-width table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Salary</th>
                          <th>Country</th>
                          <th>City</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>$23,789</td>
                            <td>Curaçao</td>
                            <td>Sinaai-Waas</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                            <td>Baileux</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                            <td>Overland Park</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Doris Greene</td>
                            <td>$63,542</td>
                            <td>Malawi</td>
                            <td>Feldkirchen in Kärnten</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Mason Porter</td>
                            <td>$78,615</td>
                            <td>Chile</td>
                            <td>Gloucester</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <nav>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
                <p className="copyright text-center">
                  ©
                  <script>document.write(new Date().getFullYear())</script>
                  <a href="http://www.creative-tim.com">Creative Tim</a>, made
                  with love for a better web
                </p>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MyPage;
