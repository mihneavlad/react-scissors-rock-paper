import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';



const Home = (props) => (

    <Fragment>
      <div className="intro-page d-flex m-auto">
        <Link to="/gameview">
          <button>Scissors, Rock or Paper?</button>
        </Link>
      </div>
    </Fragment>

)

export default Home;
