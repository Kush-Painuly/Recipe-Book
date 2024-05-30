const btn = document.querySelector(".theme svg");

btn.addEventListener("click", () => {
    const ele = document.querySelector(":root");
    const styles = getComputedStyle(ele);

    if (styles.getPropertyValue("--darkMode") === "#333") {
        ele.style.setProperty("--darkMode", "#dfdfdf");
        ele.style.setProperty("--lightMode", "#333");
    } else {
        ele.style.setProperty("--darkMode", "#333");
        ele.style.setProperty("--lightMode", "#dfdfdf");
    }
});
