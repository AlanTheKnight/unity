import { marked } from 'marked'
import DOMPurify from 'dompurify'

const markedOptions: marked.MarkedOptions = {
  gfm: true,
  smartypants: true
}

export const getMarked = (content: string, inline = false): string => {
  let sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['b', 'img', 'i']
  })
  sanitizedContent = new DOMParser().parseFromString(sanitizedContent, 'text/html').documentElement
    .textContent as string
  if (inline) return marked.parseInline(sanitizedContent, markedOptions)
  return marked(sanitizedContent, markedOptions)
}
