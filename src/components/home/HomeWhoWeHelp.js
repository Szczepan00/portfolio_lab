import  data  from './organizations';

export function HomeWhoWeHelp() {

    // console.log(data);
    return (
        <section className="whoWeHelp" id="fundations">
            <h3 className="whoWeHelp__title">Komu pomagamy?</h3>
            <ul className="whoWeHelp__organizations">
                <li>Fundacjom</li>
                <li>Organizacjom <br />pozarządowym </li>
                <li>Lokalnym <br/>zbiórkom</li>
            </ul>
            <span className="whoWeHelp__description">
               {data[0].description}
            </span>
            <div className="whoWeHelp__entries">
                <div className="whoWeHelp__entries--entry">
                    <aside>
                        <h4>Fundacja “Dbam o Zdrowie”</h4>
                        <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                    </aside>
                    <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                </div>

                <div className="whoWeHelp__entries--entry">
                    <aside>
                        <h4>Fundacja “Dla dzieci”</h4>
                        <span>Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>
                    </aside>
                    <span>ubrania, meble, zabawki</span>
                </div>

                <div className="whoWeHelp__entries--entry">
                    <aside>
                        <h4>Fundacja “Bez domu”</h4>
                        <span>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>
                    </aside>
                    <span>ubrania, jedzenie, ciepłe koce</span>
                </div>
            </div>
            <nav className="whoWeHelp__pages">
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ol>
            </nav>
        </section>
    );
}