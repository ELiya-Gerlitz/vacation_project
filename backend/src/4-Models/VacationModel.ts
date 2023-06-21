import joi from "joi"
import { UploadedFile } from "express-fileupload"

class VacationModel{
    public vacationId : number
    public destination : string
    public description : string
    public startingDate : string
    public endingDate : string
    public price : string
    public image : UploadedFile
    public imageName : string
    public continentId : number

    // virtual field
    public isFollowing : boolean

    public constructor(vacation : VacationModel){
        this.vacationId = vacation.vacationId
        this.destination = vacation.destination
        this.description = vacation.description
        this.startingDate = vacation.startingDate
        this.endingDate = vacation.endingDate
        this.price = vacation.price
        this.image = vacation.image
        this.imageName = vacation.imageName
        this.continentId = vacation.continentId
        this.isFollowing = vacation.isFollowing

    }

    public static validationScheme= joi.object({
        vacationId: joi.number(),
        destination: joi.string().min(2).max(1000).required(),
        description: joi.string().min(2).max(1000).required(),
        startingDate: joi.string().min(1).required(),
        endingDate: joi.string().min(1).required(),
        price: joi.string().min(1).max(10000).required(),
        image: joi.required(),
        imageName: joi.string().min(2).max(250).optional(),
        continentId: joi.number().required(),
        isFollowing: joi.boolean().optional()
    })

    public validate():string{
        const result= VacationModel.validationScheme.validate(this)
        return result.error?.message
    }



}

export default VacationModel