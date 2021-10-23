interface DiscordUser {
    accent_color?: string
    avatar: string
    banner?: string
    banner_color?: string
    discriminator: string
    flags: number
    id: string
    locale: string
    mfa_enabled: boolean
    public_flags: number
    username:  string
}

export default function DiscordProfile({user}: {user: DiscordUser}) {
    return(
        <div>
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}/>
            <h1>Hello {user.username}</h1>
        </div>
    )
}