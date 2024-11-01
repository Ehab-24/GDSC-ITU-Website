import { registrationDeadline } from "./data";


export function areApplicationsOpen() {
    return registrationDeadline > new Date()
}
