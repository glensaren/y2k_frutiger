const pageLinks = document.querySelectorAll('.page-link')
for (let pageLink of pageLinks){
    if (getComputedStyle(pageLink).backgroundImage == "none" && pageLink.textContent == ""){
        pageLink.classList.add("empty-link")
        pageLink.textContent = "СТРАНИЦА НЕ НАЙДЕНА"
    }
}