class VacationModel{
    public vacationId : number
    public destination : string
    public description : string
    public startingDate : string
    public endingDate : string
    public price : string
    public image : FileList
    public imageName : string
    public continentId : number
    public isFollowing : boolean
    public followersCount : number


    public static destinationValidation = {
        required:{value: true, message: "destination required!"},
        minLength:{value: 4, message: "emaildestination has to be longer than 2 characters!"},
        maxLength:{value: 200, message: "too long destination!"},
    }
    
    
     public static descriptionValidation = {
            required:{value: true, message: "description required!"},
            minLength:{value: 4, message: "description has to be longer than 2 characters!"},
            maxLength:{value: 250, message: "too long description!"},
     }
     public static priceValidation = {
        required:{value: true, message: "price required!"},
        min:{value: 4, message: "price has to cost more than 2 $!"},
        max:{value: 200, message: "too high price!"},
    }
    
}

export default VacationModel