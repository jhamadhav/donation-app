
window.onload = () => {
    hideLoader()
}

const showLoader = () => {
    document.getElementById("loader-container").style.display = "flex"
}

const hideLoader = () => {
    document.getElementById("loader-container").style.display = "none"
}