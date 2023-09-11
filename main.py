'''
This is the main file of the web novel writing service. It contains the entry point of the application.
'''
import tkinter as tk
from view_page import NovelViewPage
def main():
    root = tk.Tk()
    root.title("Web Novel Writing Service")
    # Create an instance of NovelViewPage
    novel_view_page = NovelViewPage(root)
    # Start the application
    root.mainloop()
if __name__ == "__main__":
    main()