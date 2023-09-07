function getBotResponse(input) {
    // Simple responses
    if (input.toLowerCase().includes("hola")) {
        return "Hola! Cómo estás?";
    }
    if (input.toLowerCase().includes("bien")) {
        return "Me alegro"
    }
    if (input.toLowerCase().includes("mal")) {
        return "Tranqui que todo va a mejorar."
    }
    if (input.toLowerCase().includes("vos")) {
        return "Contento de hablar con vos :)"
    }
    if (input.toLowerCase().includes("chau")) {
        return "Muchas gracias por tu consulta! Hablamos pronto!";
    }

    // Presupuesto
    if (input.toLowerCase().includes("presupuesto")) {
        return "Qué podemos hacer por vos?<br> * Un <strong>anillo</strong>?<br> * Unos <strong>aros</strong>?<br> * Un <strong>dije</strong>?<br> * Un <strong>mate</strong>?<br> * Un <strong>cuchillo</strong>?<br> * <strong>Otra</strong> cosa?"
    }
    if (input.toLowerCase().includes("anillo") || input.toLowerCase().includes("anillos") || input.toLowerCase().includes("aro") || input.toLowerCase().includes("aros") || input.toLowerCase().includes("dije") || input.toLowerCase().includes("dijes")) {
        return "Con qué querés que lo hagamos?<br> * <strong>Oro</strong>?<br> * <strong>Plata</strong>?<br> * <strong>Alpaca</strong>?<br> * <strong>Bronce</strong>?<br> * <strong>Otro</strong>?"
    }
    if (input.toLowerCase().includes("otro") || input.toLowerCase().includes("otra")) {
        return "Contame que buscas."
    }
    if (input.toLowerCase().includes("oro") || input.toLowerCase().includes("plata") || input.toLowerCase().includes("alpaca") || input.toLowerCase().includes("bronce") || input.toLowerCase().includes("cincelado")) {
        return "Tenés un diseño?<br> * <strong>Sí</strong><br> * <strong>No</strong>"
    }
    if (input.toLowerCase("si") || input.toLowerCase("sí")) {
        return "Contame más..."
    }
    if (input.toLowerCase("no")) {
        return "Escribinos a bajolaparrajoyas@gmail.com o en Instagram @bajolaparrajoyas"
    }

    // Mate
    if (input.toLowerCase().includes("mate")) {
        return "Querés un mate grande o chiquito?<br> * <strong>Grande</strong><br> * <strong>Chico</strong><br> * <strong>No sé</strong>"
    }
    if (input.toLowerCase().includes("grande") || input.toLowerCase().includes("chico") || input.toLowerCase().includes("chiquito") || input.toLowerCase().includes("asta") || input.toLowerCase().includes("madera")) {
        return "Lo querés cincelado?<br> * <strong>Cincelado</strong><br> * <strong>Más simple</strong><br> * <strong>No sé</strong>"
    }

    // Cuchillo
    if (input.toLowerCase().includes("cuchillo")) {
        return "Querés un cuchillo con cabo de asta, de madera o de soguería?<br> * <strong>Cuerno</strong><br> * <strong>Madera</strong><br> * <strong>Soguería</strong><br> * <strong>No sé</strong>"
    }
    
    //Contacto
    if (input.toLowerCase().includes("contacto") || input.toLowerCase().includes("contactar") || input.toLowerCase().includes("contactarlos") || input.toLowerCase().includes("contactarnos")) {
        return 'Visitanos en <a href="#contacto">Contacto</a>'
    }
    // Default
    else {
        return "Visitanos en en Instagram @bajolaparrajoyas"
    }
}