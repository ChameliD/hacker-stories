
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ClassClick from './Components/ClassClick';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import FunctionClick from './Components/FunctionClick';
import Greeding from './Components/Greeding';
import Hello from './Components/Hello';
import Message from './Components/Message';
import NameList from './Components/NameList';
import ParentComponent from './Components/ParentComponent';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import UserGreeting from './Components/UserGreeting';
import Welcome from './Components/Welcome';
import Folder1 from './Components/Folder1';
import Folder2 from './Components/Folder2';
import Render from './Components/Render';
function App() {
  return (
    <div> 
    {/*
     <NameList/>
     <UserGreeting/>
     <ParentComponent/>
     <PostForm></PostForm>
     <PostList/>
     <EventBind/>
      <FunctionClick/>
      <ClassClick/>
      
     <Counter/>
     <Message/>
     <Greeding name="Chameli" num='1'>
        <p>This is children props</p>
      </Greeding>
      <Greeding name="Pubudu" num='2'>
        <button>Action</button>
      </Greeding>
      <Greeding name="Ashini" num='3'/>


      <Welcome name="Menike" num='10'></Welcome>
      <Welcome name="Kumarihami" num='20'></Welcome>
      <Welcome name="Gunasekara" num='30'></Welcome>
  <Hello/>*/}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Render />} >
        <Route path="/f1" element={<Folder1 />} />
        <Route path="/f2" element={<Folder2 />} />
        
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div> 
  );
}

export default App;
