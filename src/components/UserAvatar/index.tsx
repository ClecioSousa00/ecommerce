import { Session } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type UserAvatarProps = {
  data: Session
}

export const UserAvatar = ({ data }: UserAvatarProps) => {
  if (!data.user) return null
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarFallback>{data.user.name?.[0].toUpperCase()}</AvatarFallback>
        {data.user.image && <AvatarImage src={data.user.image} />}
      </Avatar>
      <p>{data.user.name}</p>
    </div>
  )
}
