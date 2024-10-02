function userDTO(user, token) {
    return {
        data:
        {
            "firstName": user.firstName,
            "lastName": user.lastName,
            "photo": user.photo,
            "email": user.email,
            "role": user.role,
            "_id": user._id
        },
        token: token
    }
}

export default userDTO