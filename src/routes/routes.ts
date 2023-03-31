import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages/NoLazy";


type JSXComponet = ()=>JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponet> | JSXComponet,
    name: string,
}



const LazyLayout = lazy(()=> import('../01-lazyload/layout/LazyLayout'))
// const Lazy3 = lazy(()=> import(/* webpackChunkName: LazyLoad2345 */  '../01-lazyload/pages/LazyPage3'))
// const Lazy1 = lazy(()=> import(/* webpackChunkName: LazyLoad3456 */  '../01-lazyload/pages/LazyPage1'))


export const routes:Route[] =[
    {
        to: '/lazyload/*',
        path: '/lazyload',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]