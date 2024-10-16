import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeUser } from '../UserReducer';
import { useDispatch } from 'react-redux';
import { logout } from '../UserReducer';

function BasicExample() {
  const user=useSelector((state)=>state.auth.user)
  const dispatch=useDispatch()


  return (
    <>
    <Navbar expand="lg" className="text-light bg-dark">
      <Container >
        <Navbar.Brand className='text-light' href="#home">Water_intake App</Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white" >
            <Link className=' btn btn-light text-dark m-3' to={'/home'}>Home</Link>
            <Link className='btn btn-light text-dark m-3' to={'/read'}>Quantity Intake list data</Link>
            <Link className=' btn btn-light text-dark m-3 ' to={'/create'}>add water Intake</Link>
            <Link className=' btn btn-light text-dark  m-3' to={'/Calculater'} >calculate Intake</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
      {user?
      <>
      <p>welocme < small>{user}</small></p>
      </>:
      null
      }
      {user?
      <>
      <button onClick={()=>{
        dispatch(removeUser())
        dispatch(logout())

      }}>Logout</button>
      </>:
      <div className='px-5 d-flex'>
<Link className='btn btn-info mx-2' to={'/login'}>Login</Link>
<Link className='btn btn-success mx-2' to={'/'}>signin</Link>

      </div>
      
      }
    </Navbar>


</>

  );
}

export default BasicExample;