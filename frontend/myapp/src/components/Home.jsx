import {Link} from 'react-router-dom';

const Home = () => {
    return ( 

        <div>
            Welcome!!
            <br />
            <Link to='/login'>Login</Link>
        </div>
     );
}
 
export default Home;