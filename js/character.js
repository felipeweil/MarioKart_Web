$(document).ready(function()
{
    console.log("Script and jQuery loaded");

    let $arrCharIcons = $(".char-icon");
    let $arrCursors = $(".cursor");

    $($arrCharIcons).hover(
        function () {
            let index = $(this).index();
            showCursor(index);
        },
        function () {
            let index = $(this).index();
            hideCursor(index);
        }
    );

    function showCursor(index) {
        $arrCursors.eq(index).addClass("showcursor"); 
    }

    function hideCursor(index) {
        $arrCursors.eq(index).removeClass("showcursor"); 
    }

    // const vehicles = [
    //     { name: 'car', marioImg: 'mario_coche.png' },
    //     { name: 'car1', marioImg: 'mario_coche1.png' },
    //     { name: 'car2', marioImg: 'mario_coche2.png' },
    //     { name: 'car3', marioImg: 'mario_coche3.png' },
    //     { name: 'car4', marioImg: 'mario_coche4.png' },
    //     { name: 'car5', marioImg: 'mario_coche5.png' }
    // ];

    // let currentVehicleIndex = 0;

    // const vehicleImg = document.getElementById("vehicle");
    // const marioImg = document.getElementById("mario");
    // const title = document.querySelector('h2');

    // function updateTitle(vehicle) {
    //     title.innerHTML = `You selected: ${vehicle}`;
    // }

    // function changeVehicle(direction) {
    //     currentVehicleIndex += direction;

    //     if (currentVehicleIndex < 0) {
    //         currentVehicleIndex = vehicles.length - 1;
    //     } else if (currentVehicleIndex >= vehicles.length) {
    //         currentVehicleIndex = 0;
    //     }

    //     const vehicle = vehicles[currentVehicleIndex];
    //     updateTitle(vehicle.name);

    //     // Cambiar imágenes de vehículo y Mario
    //     vehicleImg.src = "../media/vehicles/" + vehicle.name + ".png";
    //     marioImg.src = "../media/vehicles/" + vehicle.marioImg;
    // }

    // document.getElementById('left-arrow').addEventListener('click', () => changeVehicle(-1));
    // document.getElementById('right-arrow').addEventListener('click', () => changeVehicle(1));

    // // Pantalla de carga
    // window.addEventListener('load', () => {
    //     document.getElementById('loading').style.display = 'none';
    // });


})