export class PlayList {
    private trackId: number;
    private artistName: string;
    private songName: string;
    private playtime: number;
    private adrUrl: string;


    constructor(trackId: number, artistName: string, songName: string, playtime: number, adrUrl:string) {
        this.trackId = trackId;
        this.artistName = artistName;
        this.songName = songName;
        this.playtime = playtime;
        this.adrUrl = adrUrl;
    }

    getTrackId(): number {
        return this.trackId;
    }

    getArtistName() {
        return this.artistName;
    }

    getSongName() {
        return this.songName;
    }

    getPlaytime() {
        return this.playtime;
    }

    setArtistName(artistName: string) {
        this.artistName = artistName;
    }

    setSongName(songName: string) {
        this.songName = songName;
    }

    setPlaytime(playtime: number) {
        this.playtime = playtime;
    }

    getAdrUrl() {
        return this.adrUrl;
    }

      setAdrUrl(adrUrl: string) {
            this.adrUrl = adrUrl;
        }

}
