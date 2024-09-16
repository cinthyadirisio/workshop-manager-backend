function userDTO(user) {
    return {
        "firstName": user.firstName,
        "lastName": user.lastName,
        "photo": user.photo,
        "email": user.email,
        "role": user.role,
    }
}

export default userDTO