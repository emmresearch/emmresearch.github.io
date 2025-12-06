// import { Button } from './components/Button';
import { Header } from './components/Header';
import { SubHeader } from "./components/SubHeader";
import { Divider } from "./components/Divider";
import './App.scss';
import {Spacer} from "./components/Spacer.tsx";

export const App = () => {

    return (
        <div className="app">
            <Header title="Euro Macromechanica (EMM) Research" />
            <Divider />

            <SubHeader title="About" />
            <p><strong>EMM Research</strong> is an independent FX study focused on the price dynamics of EUR/USD. Its goal is to identify opportunities for generating consistent alpha based on market inefficiencies and to develop models that can be applied either through <strong>discretionary</strong> (manual) trading or <strong>quantitative</strong> (algorithmic) approaches. The research is conducted by a <strong>single author</strong>.</p>
            <Spacer />
            <p><strong>EMM Research</strong> — независимое FX-исследование, сосредоточенное на динамике движения цены EUR/USD. Его цель — выявление возможностей генерации стабильной альфы на основе рыночных неэффективностей и разработка моделей, которые могут применяться как в <strong>дискреционном</strong> (ручном), так и в <strong>количественном</strong> (алготрейдинг) формате. Исследование проводится <strong>одним автором</strong>.</p>
            <Spacer />
            <Divider />
            <SubHeader title="EMM Backtest" />
            <p>
                As an illustration of the research progress, <strong>EMM Backtest</strong> is part of the results of <strong>EMM Research</strong> and demonstrates a single quantitative model with invariant logic, without overfitting over the entire period. <strong>EMM Backtest</strong> is fully reproducible and methodologically robust, thanks to its pipeline, cryptographic links, publicly available input data classified by quality, and an engineering approach.

                The tests are designed solely to illustrate one model over the period from January 2002 to August 2025 (23 years 7 months) using minute-level data, starting from the introduction of cash euros as the single currency of the EU and approximately the beginning of retail trading.

                Additionally, a <strong>Cross Asset Test on GBP/USD</strong>  was conducted without parameter adjustments, considering the high correlation with EUR/USD prior to <strong>Brexit (2016)</strong>.
            </p>
            <Spacer />
            <p>В качестве иллюстрации прогресса исследования, <strong>EMM Backtest</strong> является частью результатов <strong>EMM Research</strong> и демонстрирует одну количественную модель с инвариантной логикой без переобучения на всём периоде. <strong>EMM Backtest</strong> полностью воспроизводим и методологически продуман благодаря пайплайну, криптографическим связкам, публичным исходным данным с классификацией по качеству, а также инженерному подходу.

                Тесты ориентированы исключительно на иллюстрацию одной модели за период с января 2002 по август 2025 года (23 года 7 месяцев) на минутных данных, начиная с момента введения наличных евро как единой валюты ЕС и приблизительной точки начала торговли на розничном рынке.

                В качестве дополнения проведён <strong> Cross-Asset Test на GBP/USD</strong>  без подгонки параметров, учитывая высокую корреляцию с EUR/USD до <strong>Brexit (2016)</strong>.

            </p>
            <Spacer />
            <p className="opacity">The methodology of <strong>EMM Backtest</strong> was reviewed by <strong>Finbou AG</strong> (a Swiss CTA specializing in algorithmic FX strategies), resulting in proposed approaches for live due diligence.</p>
            <p className="opacity">Методология <strong>EMM Backtest</strong> была рассмотрена <strong>Finbou AG</strong> (швейцарский CTA, специализирующийся на алгоритмических FX-стратегиях), в результате чего были предложены варианты проведения live due diligence.</p>
            <Spacer />
            <Divider />
            <SubHeader title="EMM Backtest Methodology" />
            <a href="https://euro-macromechanica-backtest.github.io">https://euro-macromechanica-backtest.github.io</a>
            <a href="https://euro-macromechanica-backtest.pages.dev">https://euro-macromechanica-backtest.pages.dev</a>
            <Spacer />
            <Divider />

            <p className="opacity center">© 2025 Euro Macromechanica (EMM) Research</p>
        </div>
    );
};