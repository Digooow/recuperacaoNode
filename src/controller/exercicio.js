import ServiceExercicio from '../service/exercicio.js'


class ControllerExercicio {

    Lista(req, res) {

        const lista = ["Celsius para fahrenheit", "Fahrenheit para celsius", "Celsius para Kelvin"]

        res.send({ lista });
    }


    CF(req, res) {

        try {

            const celsius = req.body.celsius;
            const fahrenheit = ServiceExercicio.CF(celsius)
            res.send({ fahrenheit })
        } catch (error) {
            res.send({ message: error.message })

        }
    }



    FC(req, res) {

        try {

            const fahrenheit = Number(req.body.fahrenheit);
            const celsius = ServiceExercicio.FC(fahrenheit)
            res.send({ celsius });


        } catch (error) {
            res.send({ message: error.message })
        }
    }



    CK(req, res) {

        try {

            const celsius = Number(req.body.celsius);
            const kelvin = ServiceExercicio.CK(celsius)
            res.send({ kelvin })

        } catch (error) {
            res.send({ message: error.message })
        }

    }
}

export default new ControllerExercicio()