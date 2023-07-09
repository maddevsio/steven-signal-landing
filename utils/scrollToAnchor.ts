const scrollToAnchor = (anchorId: string): void => {
  const anchorElement = document.getElementById(anchorId)
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth' })
  }
}

export default scrollToAnchor
