import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';
import Todos from './components/Todos/Todos';
import Photos from './components/Photos/Photos';
const style = {
  color:'orange',
  backgroundColor: 'yellow',
  borderRadius: '20px',
  width:'500px',
  margin: '0 auto',
  marginTop: '20px',
  padding: '30px'
}

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Blog heading='Cricket' author='England'></Blog>
      <Blog heading='Football' author='England'></Blog>
      <Blog heading='Cabadi' author='Bangaldesh'></Blog>
      </div>
      <div>
        <article className='blog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus atque neque voluptatem laudantium dolor consequuntur repudiandae aperiam aliquam eaque.</article>
      </div>
      <h2 style={style}>I love my Country.</h2>
      <p style={{color:'white', backgroundColor:'black', width: '500px', borderRadius:'10px',padding:'20px', margin:'20px auto'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et molestiae aliquid quod saepe in ipsa assumenda odit perferendis, voluptatum praesentium quae facilis sit. Quod vero quaerat numquam, quo illum commodi.</p>
      <Mobile></Mobile>
      <Photos></Photos>
      <Todos></Todos>
    </div>
    
  );
}

export default App;
