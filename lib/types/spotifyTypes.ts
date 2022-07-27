export type SingleAlbum = {
  artists: SimpleArtist[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  release_date: string;
};

export type SimpleArtist = {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type ExtendedArtist = SimpleArtist & {
  genres: string[];
  images: ImageType[];
};

export type ImageType = {
  height: number;
  url: string;
  width: number;
};

export type SingleTrack = {
  album: SingleAlbum;
  artists: SimpleArtist[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  popularity: string;
  preview_url: string;
};
