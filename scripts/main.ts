import SVGInject from "@iconfu/svg-inject";
import Aos from "aos";

//init Aos animation
Aos.init({
  once: true,
});

//inject svg
const svgImages = document.querySelectorAll(
  "img.inject-svg"
) as NodeListOf<HTMLImageElement>;
document.addEventListener("DOMContentLoaded", function () {
  //@ts-ignore
  SVGInject(svgImages);
});

//counter
const counter = (
  elements: NodeListOf<HTMLElement>,
  speed: number = 200
): void => {
  elements.forEach((counter) => {
    let initialVal = 0;
    const finalVal = +counter.innerText.replace(/\D/gi, "");
    const text = counter.innerText.replace(/\d/gi, "");
    const increment = finalVal / speed;
    let intervalId = setInterval(() => {
      if (initialVal < finalVal) {
        counter.innerText = Math.ceil(initialVal + increment) + text;
        initialVal += increment;
      } else {
        counter.innerText = finalVal + text;
        clearInterval(intervalId);
      }
    }, 5);
  });
};

// init counter on scroll
const counterItems = document.querySelectorAll(
  ".counter-count"
) as NodeListOf<HTMLElement>;
const funfactSection = document.querySelector(
  ".funfacts-list"
) as HTMLUListElement;
const observer = new IntersectionObserver((entries, ob) => {
  entries.forEach((entry) => {
    const intersecting: boolean = entry.isIntersecting;
    if (intersecting) {
      counter(counterItems, 300);
      ob.unobserve(entry.target);
    }
  });
});
if (funfactSection) {
  observer.observe(funfactSection);
}

// Tab
// Get all the tab groups on the page
const tabGroups = document.querySelectorAll(
  "[data-tab-group]"
) as NodeListOf<HTMLElement>;

// Function to set the active tab for a given tab group
function setActiveTab(tabGroup, tabName) {
  // Get the tabs nav and content for this tab group
  const tabsNav = tabGroup.querySelector("[data-tab-nav]");
  const tabsContent = tabGroup.querySelector("[data-tab-content]");

  // Remove the active class from all tab nav items and content panes
  tabsNav.querySelectorAll("[data-tab]").forEach((tabNavItem) => {
    tabNavItem.classList.remove("active");
  });

  tabsContent.querySelectorAll("[data-tab-panel]").forEach((tabPane) => {
    tabPane.classList.remove("active");
  });

  // Add the active class to the selected tab nav item and content pane
  const selectedTabNavItem = tabsNav.querySelector(`[data-tab="${tabName}"]`);
  selectedTabNavItem.classList.add("active");
  const selectedTabPane = tabsContent.querySelector(
    `[data-tab-panel="${tabName}"]`
  );
  selectedTabPane.classList.add("active");
}

// Loop through each tab group
tabGroups.forEach((tabGroup) => {
  // Get the tabs nav and content for this tab group
  const tabsNav = tabGroup.querySelector("[data-tab-nav]") as HTMLElement;
  const tabsNavItem = tabsNav.querySelectorAll(
    "[data-tab]"
  ) as NodeListOf<HTMLElement>;

  // Get the active tab index from local storage, or default to 0 if not set
  const activeTabName =
    localStorage.getItem(`activeTabName-${tabGroup.dataset.tabGroup}`) ||
    tabsNavItem[0].getAttribute("data-tab");

  // Set the active tab
  setActiveTab(tabGroup, activeTabName);

  // Add a click event listener to each tab nav item
  tabsNavItem.forEach((tabNavItem) => {
    tabNavItem.addEventListener("click", () => {
      // Get the index of the clicked tab nav item
      const tabName = tabNavItem.dataset.tab as string;
      setActiveTab(tabGroup, tabName);

      // Save the active tab index to local storage
      localStorage.setItem(
        `activeTabName-${tabGroup.dataset.tabGroup}`,
        tabName
      );
    });
  });
});

// Accordion
// ----------------------------------------
const accordion = document.querySelectorAll("[data-accordion]");
accordion.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement as HTMLElement;
    accordionItem.classList.toggle("active");
  });
});
