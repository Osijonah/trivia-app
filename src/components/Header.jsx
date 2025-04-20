import * as classes from "./Header.module.css";


const Header = ({children}) => {
    
    return <main className={classes.main}>
        <header className={classes.header}>
            <p>TrivialApp</p>
        </header>
        <section>{children}</section>
    </main>
}

export default Header;