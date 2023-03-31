import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
//import { LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'
import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading ....</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                <ul>
                    {
                        routes.map(({to, name}) => (
                        <li key={to}>
                            <NavLink to={to} className={({isActive})=>isActive ? 'nav-active' : '' }>{name}</NavLink>   
                        </li>
                        ))
                    }
                </ul>
                </nav>
                
                <Routes>
                    {
                        routes.map( ({to, path, Component}) =>(
                            <Route
                                key={to}
                                path={path}
                                element={<Component />} />
                        ))
                    }

                    {/* <Route path='lazy2' element={<LazyPage2 />} />
                    <Route path='lazy3' element={<LazyPage3 />} /> */}
                    <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    </Suspense>
  )
}
