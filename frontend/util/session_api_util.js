// request that creates a new user
export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user }
    })
);

// request that creates a new session
export const login = (user) => (
    $.ajax({
        method: 'POST',
        url: `/api/session`,
        data: { user }
    })
);

// request that deletes the current session
export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `/api/session`
    })
);