import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App.tsx'
import './index.css'
import QueryProvider from "./lib/reactQuery/QueryProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import "./firebase.ts"

createRoot(document.getElementById('root')!).render(
    <QueryProvider>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </QueryProvider>
)
