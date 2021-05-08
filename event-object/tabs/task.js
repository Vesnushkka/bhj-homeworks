const tabNavigation = document.querySelector(".tab__navigation");
const tabs = tabNavigation.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");
tabNavigation.addEventListener("click", openTab);

function openTab(event) {
    const idx = Array.from(tabs).indexOf(event.target);
    const activeIndex = Array.from(tabs).findIndex((tab) =>
        tab.classList.contains("tab_active")
    );
    tabs[activeIndex]?.classList.remove("tab_active");
    tabs[idx]?.classList.add("tab_active");
    contents[activeIndex]?.classList.remove("tab__content_active");
    contents[idx]?.classList.add("tab__content_active");
}