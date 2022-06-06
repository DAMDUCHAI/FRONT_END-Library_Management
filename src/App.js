
import './App.css';
import {React,Fragment} from 'react'
import { BrowserRouter, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import { HomeAdminTemplates } from './templates/HomeAdminTemplates/HomeAdminTemplates';


import BookComponents from './components/Admin/BookComponents';
import CategoryComponents from './components/Admin/CategoryComponents';
import AuthorComponents from './components/Admin/AuthorComponents';
import PublisherComponents from './components/Admin/PublisherComponents';
import DrawerLibrary from './HOC/LibraryHOC/DrawerLibrary';
import LoadingComponents from './components/LoadingComponents.js/LoadingComponents';
import ReaderComponents from './components/Admin/ReaderComponents';


function App() {
  return (
<div>
<DrawerLibrary/>
<LoadingComponents/>
<Switch>
<HomeAdminTemplates path="/" exact Component={BookComponents}/>
<HomeAdminTemplates path="/book-manager" exact Component={BookComponents}/>
<HomeAdminTemplates path="/category-manager" exact Component={CategoryComponents}/>
<HomeAdminTemplates path="/author-manager" exact Component={AuthorComponents}/>
<HomeAdminTemplates path="/publisher-manager" exact Component={PublisherComponents}/>
<HomeAdminTemplates path="/reader-manager" exact Component={ReaderComponents}/>

</Switch>

</div>

  );
}

export default App;
