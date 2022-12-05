import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes'
import { DefaultLayout } from './components/Layout'

function App() {
    let loginAccess = true

    if (loginAccess) {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        {
                            privateRoutes.map((route, index) => {
                                const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout
                                const Page = route.component
                                return <Route key={index} path={route.path} element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }/>
                            })
                        }
                    </Routes>
                </div>
            </Router>
        );
    } 
    else {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        {
                            publicRoutes.map((route, index) => {
                                const Layout = route.layout
                                const Page = route.component
                                return <Route key={index} path={route.path} element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }/>
                            })
                        }
                    </Routes>
                </div>
            </Router>
        );
    }
    
}

export default App;
