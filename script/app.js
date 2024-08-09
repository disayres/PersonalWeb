const changeThemeBtn = document.querySelector('.change-theme');
const darkThemeIcon = `<svg class="change-theme__icon" data-name="Layer 1" viewBox="0 0 250 312.5" x="0px" y="0px"><path d="M112.39,34.73a4.22,4.22,0,0,0-1.08.14,92.18,92.18,0,0,0,23.47,181.28h.35a91.87,91.87,0,0,0,71.32-34.22h0a3.95,3.95,0,0,0-4.33-6.23A82.47,82.47,0,0,1,176,179.9h0c-44.73,0-81.78-36.39-82.59-81.1a82.31,82.31,0,0,1,21.76-57.42,4,4,0,0,0-2.79-6.65Z"/>`
const lightThemeIcon = `<svg class="change-theme__icon" viewBox="0 0 20 20" id="light"><path d="M10 6.797a3.191 3.191 0 0 0-3.2 3.201 3.19 3.19 0 0 0 3.2 3.199 3.19 3.19 0 0 0 3.199-3.199A3.19 3.19 0 0 0 10 6.797zm0 5.25a2.049 2.049 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zM15 5c-.312-.312-.883-.248-1.273.142-.39.391-.453.959-.141 1.272s.882.25 1.273-.141c.39-.39.453-.961.141-1.273zm-9.858 8.729c-.391.39-.454.959-.142 1.271s.882.25 1.273-.141c.391-.391.454-.961.142-1.273s-.883-.248-1.273.143zM5 5c-.312.312-.249.883.141 1.273.391.391.961.453 1.273.141s.249-.883-.142-1.273C5.883 4.752 5.312 4.688 5 5zm8.727 9.857c.39.391.96.455 1.273.143s.249-.883-.142-1.274-.96-.453-1.273-.141-.248.882.142 1.272zM10 4.998c.441 0 .8-.447.8-1C10.799 3.445 10.441 3 10 3c-.442 0-.801.445-.801.998 0 .553.358 1 .801 1zM10 17c.441 0 .8-.447.8-1 0-.553-.358-.998-.799-.998-.442 0-.801.445-.801.998-.001.553.357 1 .8 1zm-5-7c0-.441-.45-.8-1.003-.8-.553 0-.997.359-.997.8 0 .442.444.8.997.8C4.55 10.8 5 10.442 5 10zm12 0c0-.441-.448-.8-1.001-.8-.553 0-.999.359-.999.8 0 .442.446.8.999.8.553 0 1.001-.358 1.001-.8z"></path></svg>`
let messageBtn = document.querySelector('.contact__submit')
let messageBtnText = "message send"


changeThemeBtn.addEventListener("click", function () {
    document.documentElement.classList.toggle('dark-theme')
    if (document.documentElement.classList.contains("dark-theme")) {
        window.localStorage.setItem("theme", "dark-theme")
        this.innerHTML = lightThemeIcon
    } else {
        window.localStorage.setItem("theme", "light-theme")
        this.innerHTML = darkThemeIcon
    }
})

if (window.localStorage.getItem("theme") === "dark-theme") {
    document.documentElement.classList.add("dark-theme")
    changeThemeBtn.innerHTML.toggle = lightThemeIcon
}

messageBtn.addEventListener('click', function () {
    messageBtn.innerText = messageBtnText
})