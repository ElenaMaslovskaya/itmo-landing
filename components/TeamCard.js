export class TeamCard {
  constructor({ surname, name, jobPosition, jobTitle, degree, link }, cardSelector) {
    this._surname = surname;
    this._name = name;
    this._jobPosition = jobPosition;
    this._jobTitle = jobTitle;
    this._degree = degree;
    this._link = link;
    this._cardSelector = cardSelector;
    console.log(this._jobTitle);
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".swiper-slide").cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".team__job-title").textContent = "12";
    console.log(this._jobTitle);
    this._element.querySelector(".team__img").src = this._link;
    this._element.querySelector(".team__name-name").textContent = this._name;
    this._element.querySelector(".team__job-position").textContent = this._jobPosition;
    this._element.querySelector(".team__job-title").textContent = this._jobTitle;
    this._element.querySelector(".team__job-degree").textContent = this._degree;
    this._element.querySelector(".team__name-surname").textContent = this._surname;

    return this._element;
  }
}
