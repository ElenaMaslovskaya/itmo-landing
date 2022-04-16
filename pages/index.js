import { initialTeamCards, teamSwiperSelector } from "../utils/constants.js";
import { TeamCard } from "../components/TeamCard.js";
import Section from "../components/SwiperSection.js";
// import { TeamSwiper } from "../components/team.js";

const teamCardList = new Section(
  {
    items: initialTeamCards,
    renderer: (item) => {
      const teamCard = new TeamCard(item, ".team-card-template");
      const teamCardElement = teamCard.generateCard();
      // TeamSwiper.addSlide(1, teamCardElement);
      teamCardList.addItem(teamCardElement);
    },
  },
  teamSwiperSelector
);
teamCardList.renderItems();
