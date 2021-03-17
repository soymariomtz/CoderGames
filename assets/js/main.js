// Título con horario de atención. 
let date = new Date();
    let currentHour = date.getHours();
    let titleService = document.getElementById('service');
    let hours = [{
        "open" : 9,
        "close" : 18,
        "message" : "Horario de Atención: Abierto 9-18hs"
    }];
    let title = 'Horario de Atención: Cerrado';
    hours.forEach(hour => {
        if(currentHour >= hour.open && currentHour < hour.close) {
            title = hour.message;
        }            
    });
    titleService.textContent = title; 


const DATA_STORAGE = 'data'
let amount = load('DATA_STORAGE');
function save(data) {
    sessionStorage.setItem('DATA_STORAGE',JSON.stringify(data));
};
function load(storageData) {
    if(sessionStorage.getItem(storageData)) {
        return JSON.parse(sessionStorage.getItem(storageData));
    }else {
        return[];
        }
    };




