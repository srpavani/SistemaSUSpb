export default function scrollToTop(specifElement?: string) {
  if(specifElement) {
    return document.getElementById(specifElement)!.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }
  
  return window.scrollTo({
    behavior: 'smooth',
    top: 0
  })
}