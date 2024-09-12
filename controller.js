const users = [
    {
        id: 1,
        name: 'User 1',
    },
    {
        id: 2,
        name: 'User 2',
    },
];

const getUsers = (cb) => {
    cb(users);
}

const getUserById = (id, cb) => {
    const user = users.find((user) => String(user.id) === String(id));

    cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
