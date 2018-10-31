import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import hero from '../hero.jpg';



const Home = (props) => (

    <Fragment>
      <div className="intro-page d-flex">
        <div className="m-auto">
          <Link to="/gameview" className="btn btn-light">
            Scissors, Rock or Paper?
          </Link>
        </div>
      </div>
    </Fragment>

)

export default Home;
