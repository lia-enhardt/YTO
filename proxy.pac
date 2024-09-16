function FindProxyForURL(url, host) {
  if (
    dnsDomainIs(host, ".youtube.com") ||
    dnsDomainIs(host, ".googlevideo.com") ||
    dnsDomainIs(host, ".youtu.be") ||
    dnsDomainIs(host, ".ytimg.com") ||
    dnsDomainIs(host, ".ggpht.com") ||
    dnsDomainIs(host, ".googleusercontent.com") ||
    dnsDomainIs(host, ".googleapis.com") ||
    dnsDomainIs(host, ".nhacmp3youtube.com") ||
    dnsDomainIs(host, ".gstatic.com") ||
    dnsDomainIs(host, ".wide-youtube.l.google.com") ||
    dnsDomainIs(host, ".ytimg.l.google") ||
    dnsDomainIs(host, ".play.google.com") ||
    dnsDomainIs(host, ".1e100.net") ||
    dnsDomainIs(host, ".you.tube") ||
    dnsDomainIs(host, ".yt.be") ||
    dnsDomainIs(host, ".youtube-ui.l.google.com") ||
    dnsDomainIs(host, ".ytimg.com") ||
    dnsDomainIs(host, ".ggpht.com") ||
    dnsDomainIs(host, ".googleapis.com") ||
    dnsDomainIs(host, ".gstatic.com") ||
    dnsDomainIs(host, ".gvt1.com") ||
    dnsDomainIs(host, ".gvt2.com") ||
    dnsDomainIs(host, ".gvt3.com") ||

    dnsDomainIs(host, ".m.youtube.com") ||        // Mobile YouTube domain
    dnsDomainIs(host, ".youtube-nocookie.com") || // No-cookie YouTube domain
    dnsDomainIs(host, ".youtubei.googleapis.com") // YouTube API domain
  ) {
    return "SOCKS5 localhost:1080; DIRECT";
  } else {
    return "DIRECT";
  }
}
