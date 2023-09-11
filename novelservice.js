/**
 * NovelService class for managing novels.
 */
export class NovelService {
  constructor() {
    // Initialize the novels array
    this.novels = [];
  }
  /**
   * Create a new novel with the given title and content.
   * @param {string} title - The title of the novel.
   * @param {string} content - The content of the novel.
   * @returns {number} - The ID of the created novel.
   */
  createNovel(title, content) {
    const novel = {
      id: this.novels.length + 1,
      title,
      content,
    };
    this.novels.push(novel);
    return novel.id;
  }
  /**
   * Get a novel by its ID.
   * @param {number} id - The ID of the novel.
   * @returns {object} - The novel object.
   */
  getNovelById(id) {
    return this.novels.find((novel) => novel.id === id);
  }
  /**
   * Update the title and content of a novel.
   * @param {number} id - The ID of the novel.
   * @param {string} title - The new title of the novel.
   * @param {string} content - The new content of the novel.
   * @returns {boolean} - True if the novel was updated successfully, false otherwise.
   */
  updateNovel(id, title, content) {
    const novel = this.getNovelById(id);
    if (novel) {
      novel.title = title;
      novel.content = content;
      return true;
    }
    return false;
  }
  /**
   * Delete a novel by its ID.
   * @param {number} id - The ID of the novel.
   * @returns {boolean} - True if the novel was deleted successfully, false otherwise.
   */
  deleteNovel(id) {
    const index = this.novels.findIndex((novel) => novel.id === id);
    if (index !== -1) {
      this.novels.splice(index, 1);
      return true;
    }
    return false;
  }
}