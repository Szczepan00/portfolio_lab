export function HomeSteps() {
    return (
        <section className="steps">
            <div className="steps__title">
                <h3>Wystarczą 4 proste kroki</h3>
            </div>

            <div className="steps__items">
                <div className="steps__items--item">
                    <span>Wybierz rzeczy</span>
                    <span>ubrania, zabawki, <br/> sprzęt i inne</span>
                </div>

                <div className="steps__items--item">
                    <span>Spakuj je</span>
                    <span>skorzystaj z <br/> worków na śmieci</span>
                </div>

                <div className="steps__items--item">
                    <span>Zdecyduj komu <br/> chcesz pomóc</span>
                    <span>wybierz zaufane <br/> miejsce</span>
                </div>

                <div className="steps__items--item">
                    <span>Zamów kuriera</span>
                    <span>kurier przyjedzie <br/> w dogodnym terminie</span>
                </div>
            </div>

            <div className="steps__button">
                <a href="#">Oddaj <br /> rzeczy</a>
            </div>

        </section>
    );
}
