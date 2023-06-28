import { SavedAlbums } from "../albums/SavedAlbums";
import { CurrentUserPlaylist } from "../playlists/currentUsers";
import { UserSavedTracks } from "../tracks/userSavedTracks";
import { FollowedArtist } from "../users/followedArtist";

export function HeaderContent({token}) {
  return (
    <div className="my-8 overflow-auto">
      <SavedAlbums token={token} />
      <CurrentUserPlaylist token={token} />
      <UserSavedTracks token={token} />
      <FollowedArtist token={token} />
    </div>
  )
}