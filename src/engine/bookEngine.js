export function createBook(pdfData) {
  return {
    title: pdfData.title,
    author: pdfData.author,
    pagesCount: pdfData.pagesCount,
    pages: pdfData.pages,
    chapters: [],
    summary: "",
    createdAt: new Date(),
  };
}