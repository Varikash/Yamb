import Style from './App.module.css'
import DownColumn from "../DownColumn/DownColumn.tsx";
import UpColumn from "../UpColumn/UpColumn.tsx";
import ClearButton from "../ClearButton/ClearButton.tsx";


const App = () => {
    return(
            <>
                <section className={Style.section}>
                    <DownColumn />
                    <UpColumn />
                </section>

                <ClearButton />
            </>
        )


}

export default App;