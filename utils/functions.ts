export const isImage = (fileName: string) => {
    if (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.gif')) return true
    return false
  }