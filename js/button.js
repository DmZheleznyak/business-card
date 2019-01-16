function showList(event) {

    var listService = document.getElementsByClassName("list_services")
    var mainServicesImages = document.getElementsByClassName("main_services_images")

    if ( listService[0].style.opacity === "1" ) {

        event.target.innerText = "Посмотреть список"

        listService[0].style.opacity = "0"
        listService[0].style.height = "0"
        mainServicesImages[0].style.opacity = "1"
        mainServicesImages[0].style.height = "auto"    
        return
    }
    
    event.target.innerText = "Закрыть список"

    mainServicesImages[0].style.opacity = "0"
    mainServicesImages[0].style.height = "0"
    
    listService[0].style.opacity = "1"
    listService[0].style.height = "auto"

}

function showDocumentation(event) {
    var documentation = document.getElementsByClassName("documentation")

    if ( documentation[0].style.opacity === "1" ) {

        event.target.innerText = "Открыть"

        documentation[0].style.opacity = "0"
        documentation[0].style.height = "0"
    
        return
    }
    
    event.target.innerText = "Закрыть"
    
    documentation[0].style.opacity = "1"
    documentation[0].style.height = "auto"
}