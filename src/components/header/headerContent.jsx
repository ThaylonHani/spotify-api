import { SavedAlbums } from "../albums/SavedAlbums";
import { CurrentUserPlaylist } from "../playlists/currentUsers";
import { UserSavedTracks } from "../tracks/userSavedTracks";
import { FollowedArtist } from "../users/followedArtist";

export function HeaderContent({token}) {
  return (
    <div className=" flex flex-col h-full overflow-auto gap-2 my-2">
      <SavedAlbums token={token} />
      <CurrentUserPlaylist token={token} />
      <UserSavedTracks token={token} />
      <FollowedArtist token={token} />
    </div>
  )
}