import { HomeHeader } from "./HomeHeader";
import { HomeTreeColumns} from "./HomeTreeColumns";
import { HomeSteps} from "./HomeSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import { HomeWhoWeHelp } from "./HomeWhoWeHelp";
import { HomeContact } from "./HomeContact";

export function Home() {
    return (
        <>
            <HomeHeader />
            <HomeTreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    );
}

