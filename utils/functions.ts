export const isImage = (fileName: string) => {
    if (fileName.endsWith('.png') || fileName.endsWith('.jpg')) return true
    return false
  }