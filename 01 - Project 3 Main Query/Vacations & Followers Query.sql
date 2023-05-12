
async function getVacationsForUser(userId: number) {

const sql = `
	SELECT DISTINCT
		V.*,
		EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ${userId}) AS isFollowing,
		COUNT(F.userId) AS followersCount
	FROM vacations AS V LEFT JOIN followers AS F
	ON V.vacationId = F.vacationId
	GROUP BY vacationId
	ORDER BY startDate DESC
`
}

