
import './App.css';
import Header from './Header'; 
import Product from './Product';

 
function App() {
  return ( 
    <div className="App">
      
        <h1>Welcome Everyone</h1>
        <Header/>
        <Product name="Vivo12" price="20000" />
        <Product name="Vivo13" price="10000" />
        <Product name="Vivo14" price="30000" />
        <Product name="Vivo15" price="40000" />
        
        
      
    </div>
  );
}

export default App;
