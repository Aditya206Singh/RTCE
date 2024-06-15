
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import './App.css';
import Home from './pages/Home';
import Editor_page from './pages/Editor_page';

function App() {
  return (
    <> 
    <div>
      <Toaster
        position="top-right"
        toastOption={{
          success:{
            them:{ primary:'#8906E6',

          },
        },
        }
        }
      ></Toaster>
    </div>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home />}></Route>
    <Route path="/editor/:roomId" element={<Editor_page />}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
