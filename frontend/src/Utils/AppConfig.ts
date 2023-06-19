class AppConfig{
    public VacationsURL = "http://localhost:3001/api/vacations/"
    public getSingleVacation = "http://localhost:3001/api/vacations/singleVacation/"
    public getVacByContinentId = "http://localhost:3001/api/vacation_by_continent/"
    public registerURL = "http://localhost:3001/api/auth/register/"
    public loginURL = "http://localhost:3001/api/auth/login/"
    public imgUrl = "http://localhost:3001/api/vacations/images/"
    public followURL = "http://localhost:3001/api/follow/"
    public unfollowURL = "http://localhost:3001/api/unfollow/"
    public continentsURL = "http://localhost:3001/api/continents/"
    // public vacByIsFollowingURL = "http://localhost:3001/api/vacation_by_isFollowing/:userId([0-9]+)/"

}
const appConfig = new AppConfig()
export default appConfig