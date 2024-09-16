function FindProxyForURL(url, host) {
  if (
    dnsDomainIs(host, ".youtube.com") ||
    dnsDomainIs(host, ".ytimg.com") ||
    dnsDomainIs(host, ".ggpht.com") ||
    dnsDomainIs(host, ".googlevideo.com") ||
    dnsDomainIs(host, ".nhacmp3youtube.com") ||
    dnsDomainIs(host, ".1e100.net") ||
    dnsDomainIs(host, ".youtu.be") ||
    dnsDomainIs(host, ".gvt1.com") ||
    dnsDomainIs(host, ".googleusercontent.com") ||
    dnsDomainIs(host, ".googleapis.com") ||
    dnsDomainIs(host, ".gstatic.com")
  ) {
    return "SOCKS5 localhost:1080; DIRECT";
  } else {
    return "DIRECT";
  }
}
