export interface Favorite {
    message: string,
    favorites: Favorites[]
}

export interface Favorites {
    id: string,
    movieId: string,
    username: string
}