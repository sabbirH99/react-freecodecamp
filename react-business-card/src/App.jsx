import "./App.css"
import Header from "./component/Header"
import About from "./component/About"
import Skills from "./component/Skills"

export default function App() {
    return (
        <div className="page-wrapper">
            <div className="card">
                <Header />
                <About />
                <Skills />
            </div>
        </div>
    )
}