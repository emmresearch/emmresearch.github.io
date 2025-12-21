// import { Button } from './components/Button';
import { Header } from './components/Header';
import { SubHeader } from "./components/SubHeader";
import { Divider } from "./components/Divider";
import './App.scss';
import {Spacer} from "./components/Spacer.tsx";
import { useState } from "react";
import {translations} from "./text/text.ts";
import type { Lang } from "./text/text.ts";

export const App = () => {

    const [lang, setLang] = useState<Lang>("en");
    const t = translations[lang];

    return (
        <div className="app">
            <Header title="Euro Macromechanica (EMM) Research" />
            <Spacer />
            {/*<Divider />*/}
            <p dangerouslySetInnerHTML={{ __html: t.research }} />
            <Spacer />
            <Divider />
            <SubHeader title="FX Research Focus"/>
            <p dangerouslySetInnerHTML={{ __html: t.focus }} />
            <Spacer />
            <Divider />
            <SubHeader title="Models"/>
            <p dangerouslySetInnerHTML={{ __html: t.progress }} />
            <Spacer />
            <Divider />
            <SubHeader title="EMM Backtest – EMM Quinta Medulla Invariance" />
            <p dangerouslySetInnerHTML={{ __html: t.backtest }} />
            <Spacer />

            <p className="opacity" dangerouslySetInnerHTML={{ __html: t.methodology }} />
            <Spacer />
            <Divider />
            <SubHeader title="Backtest Methodology" />
            <a href="https://euro-macromechanica-backtest.github.io">https://euro-macromechanica-backtest.github.io</a>
            <a href="https://euro-macromechanica-backtest.pages.dev">https://euro-macromechanica-backtest.pages.dev</a>
            <Spacer />
            <Divider />
            <div className="lang">
                <button className="button" onClick={() => setLang("ru")}>RU</button>
                <button className="button" onClick={() => setLang("en")}>EN</button>
            </div>
            <Spacer />
            <p className="opacity center">© 2025 Euro Macromechanica (EMM) Research</p>
        </div>
    );
};