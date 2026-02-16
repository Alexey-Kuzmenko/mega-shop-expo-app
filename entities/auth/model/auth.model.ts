export interface AuthResponse {
    access_token: string | null
    refresh_token: string | null
}

export interface AuthRequest {
    email: string
    password: string
}
