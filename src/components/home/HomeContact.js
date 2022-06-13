import facebook from './../../assets/Facebook.svg'
import instagram from './../../assets/Instagram.svg'

export function HomeContact() {
    return (
        <section className="contact">
            <div className="contact__info">
                <h5>Skontaktuj się z nami</h5>
                <form action="">
                    <div className="inputs">
                        <div className="inputName">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input id="name" type="text" placeholder="Krzysztof"/>
                        </div>
                        <div className="inputEmail">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input id="email" type="text" placeholder="abc@xyz.pl"/>
                        </div>

                    </div>
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                    </textarea>
                    <button type="submit">Wyślij</button>
                </form>
            </div>

            <footer>
                <span>Copyright by Coders Lab</span>
                <div className="icons">
                    <a href=""><img src={facebook} alt=""/></a>
                    <a href=""><img src={instagram} alt=""/></a>
                </div>
            </footer>
        </section>
    );
}