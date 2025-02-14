$(document).ready(function()
{
    // Programación del cursor al hacer hover en char-icon
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

    /**
     * 
     * @param {number} index 
     * 
     * Esta función muestra el cursor del mismo index (es decir, misma posición) que el char-icon sobre el que se ha hecho hover (desde donde se llama la función.)
     */
    function showCursor(index) {
        $arrCursors.eq(index).addClass("showcursor"); 
    }

    /**
     * 
     * @param {number} index 
     * 
     * Esta función oculta el cursor del mismo index (es decir, misma posición) que el char-icon sobre el que se ha hecho hover (desde donde se llama la función.)
     */
    function hideCursor(index) {
        $arrCursors.eq(index).removeClass("showcursor"); 
    }

    



    let $arrSelectedChar = $(".selected-char");

    $($arrCharIcons).click(function () {
        let index = $(this).index();
        showChar(index);
    });

    function showChar(index) {
        // for (i=0; i<$arrSelectedChar.length; i++) {
        //     $arrSelectedChar[i].removeClass("show-char");
        // };
        $arrSelectedChar.removeClass("show-char");

        $arrSelectedChar.eq(index).addClass("show-char");
    }

})