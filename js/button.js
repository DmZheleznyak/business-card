
function clickButton(event) {

    var listService = document.getElementsByClassName("list_services")
    var mainServicesImages = document.getElementsByClassName("main_services_images")

    if ( listService[0].style.display === "block" ) {

        event.target.innerText = "Посмотреть список"

        listService[0].style.display = "none"
        mainServicesImages[0].style.display = "flex"
        return
    }
    
    event.target.innerText = "Закрыть список"

    mainServicesImages[0].style.display = "none"
    listService[0].style.display = "block"

}