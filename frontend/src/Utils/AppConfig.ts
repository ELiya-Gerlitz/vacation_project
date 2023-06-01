class AppConfig{
    public getAllVacations = "http://localhost:3001/api/vacations/"
    public getVacByContinentId = "http://localhost:3001/api/vacation_by_continent/"
    public registerURL = "http://localhost:3001/api/auth/register/"
    public loginURL = "http://localhost:3001/api/auth/login/"

}
const appConfig = new AppConfig()
export default appConfig