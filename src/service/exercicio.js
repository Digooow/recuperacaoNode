class ServiceExercicio {


    CF(celsius) {
        if(isNaN(celsius)){
            throw new Error("Somente números são aceitos")
        }
        return celsius * 9/5 + 32
    }

    FC(fahrenheit) {
        if(isNaN(fahrenheit)){
            throw new Error("Somente números são aceitos")
        }
        return (fahrenheit - 32) * 5/9
    }

    CK(celsius) {
         if(isNaN(celsius)){
            throw new Error("Somente números são aceitos")
        }
        return celsius + 273.15
    }

}

export default new ServiceExercicio()