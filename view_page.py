import tkinter as tk
class NovelViewPage(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        self.parent = parent
        self.create_widgets()
    def create_widgets(self):
        '''
        This method creates and displays the HTML view page.
        '''
        # Create a Text widget to display the HTML content
        text_widget = tk.Text(self)
        text_widget.pack(fill=tk.BOTH, expand=True)
        # Insert the HTML content into the Text widget
        html_content = "<html><body><h1>Welcome to the Web Novel Writing Service!</h1></body></html>"
        text_widget.insert(tk.END, html_content)
        # Disable editing of the Text widget
        text_widget.config(state=tk.DISABLED)