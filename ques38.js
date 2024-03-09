function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums without specifying number of tracks
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2"));
// Creating an album with number of tracks
console.log(make_album("Artist3", "Album3", 12));
