import { initialTeamCards, teamSwiperSelector } from "../utils/constants.js";
import { TeamCard } from "../components/TeamCard.js";
import SwiperSection from "../components/SwiperSection.js";

// Team Section: swiper + cards rendering
const teamCardList = new SwiperSection(
  {
    items: initialTeamCards,
    renderer: (item) => {
      const teamCard = new TeamCard(item, ".team-card-template");
      const teamCardElement = teamCard.generateCard();
      teamCardList.addItem(teamCardElement);
    },
  },
  teamSwiperSelector
);
teamCardList.renderItems();

new Swiper(".team__slider", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: "auto",
  watchSlidesVisibility: true,
  watchOverflow: true,
  pagination: {
    el: ".team__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".team__navigation_type_next",
    prevEl: ".team__navigation_type_prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: "auto",
    },
    1282: {
      loop: false,
      spaceBetween: 30,
    },
  },
});
