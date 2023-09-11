/**
 * Entry point for the web novel writing service.
 */
// Import necessary modules
import { NovelService } from './novelService.js';
import { GUI } from './gui.js';
// Create an instance of the NovelService
const novelService = new NovelService();
// Create an instance of the GUI and pass the NovelService instance
const gui = new GUI(novelService);
// Initialize the GUI
gui.init();