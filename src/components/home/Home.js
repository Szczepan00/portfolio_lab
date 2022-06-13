import { HomeHeader } from "./HomeHeader";
import { HomeTreeColumns} from "./HomeTreeColumns";
import { HomeSteps} from "./HomeSteps";
import { HomeAboutUs } from "./HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp";

export function Home() {
    return (
        <>
            <HomeHeader />
            <HomeTreeColumns />
            <HomeSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
        </>
    );
}

