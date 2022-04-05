import Nav from "./components/Nav"
import Header from "./components/Header"
import Article from "./components/Article"
import Footer from "./components/Footer"

export default function App () {
    return(
        <div className="App">
            <Header />
            <Nav />
            <Article />
            <Footer />
        </div>
    )
}