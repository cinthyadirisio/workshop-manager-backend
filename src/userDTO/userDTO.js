function userDTO(user, token) {
    return {
        data:
        {
            "firstName": user.firstName,
            "lastName": user.lastName,
            "photo": user.photo,
            "email": user.email,
            "role": user.role
        },
        token: token
    }
}

export default userDTO