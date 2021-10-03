const [channelButton, volumeButton] = document.querySelectorAll(".dial");

const moveSelector = (button, direction = 1, event) => {
  event.preventDefault();
  const oldValue = button.style.getPropertyValue("--value");
  const newValue = parseInt(oldValue) + 30 * direction;
  button.style.setProperty("--value", `${newValue}deg`);
};

channelButton.addEventListener("click", (ev) => moveSelector(channelButton, 1, ev));
channelButton.addEventListener("contextmenu", (ev) => moveSelector(channelButton, -1, ev));
volumeButton.addEventListener("click", (ev) => moveSelector(volumeButton, 1, ev));
volumeButton.addEventListener("contextmenu", (ev) => moveSelector(volumeButton, -1, ev));

const tv = document.querySelector(".tv");

const [unknownButton, powerButton] = document.querySelectorAll(".button");

powerButton.addEventListener("click", () => {
  tv.classList.toggle("on");
});
