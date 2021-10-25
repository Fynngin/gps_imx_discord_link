export interface DiscordUser {
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
    const avatarStyles = {
        width: '150px',
        height: '150px',
        borderRadius: '100%'
    };

    return(
        <div>
            <img style={avatarStyles} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt='User Avatar'/>
            <h2>Hello {user.username}</h2>
        </div>
    )
}