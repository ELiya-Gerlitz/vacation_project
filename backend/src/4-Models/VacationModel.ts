import joi from "joi"
import UserModel from "./UserModel"

class VacationModel{
    public vacationId : number
    public destination : string
    public description : string
    public startingDate : string
    public endingDate : string
    public price : string
    public imageName : string

    public constructor(vacation : VacationModel){
        this.vacationId = vacation.vacationId
        this.destination = vacation.destination
        this.description = vacation.description
        this.startingDate = vacation.startingDate
        this.endingDate = vacation.endingDate
        this.price = vacation.price
        this.imageName = vacation.imageName
    }

    public static validationScheme= joi.object({
        destination: joi.string().min(2).max(1000).required(),
        description: joi.string().min(2).max(1000).required(),
        startingDate: joi.string().min(1).required(),
        endingDate: joi.string().min(1).required(),
        price: joi.string().min(1).max(10000).required(),
        imageName: joi.string().min(2).max(250).required()
    })

    public validate():string{
        const result= VacationModel.validationScheme.validate(this)
        return result.error?.message
    }



}

export default VacationModel