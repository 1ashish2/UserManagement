import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Home = () => {

    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col col-md-7 border border-info shadow">
                        <h1 className="text-center">Project Details</h1><hr />
                        <div className="col col-md-12">
                            <h6>This project based on Crud operation. </h6>
                            <p>  In this project i am creating user data table and
                            performing Add,edit,view and delete operation.
                           </p>
                            <p>  I am using following things to develop the project:-
                           </p>
                            <ul class="a">
                                <li>React Router : For routing one page to another page smoothly with out refreshing the page.</li>
                                <li>Hooks : For state management and data management.</li>
                                <li>Json server: As database for store data and manage data.</li>
                                <li>Axios : For fetching data from server and performing CRUD operation through server.</li>
                                <li>Concurrently : Used for run two server parallel (npm start , json-server) with single command only.</li>
                            </ul>
                            <p>These are the approach are followed in this project.</p>
                        </div>
                    </div>
                    <div className="col col-md-5 border border-info shadow userlist">
                        <Link className="btn btn-primary btn-lg p-4" to="/userlist" style={{fontSize:'2rem'}}>View user list</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;