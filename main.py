# Compile script, using pyinstaller:
# pyinstaller --noconsole --onefile main.py

import subprocess
import os
import tkinter as tk
from tkinter import messagebox


# Display a window with an error
def show_error_window(message):
    root = tk.Tk()
    root.withdraw()  # Hide the root window
    messagebox.showerror('Error', message)
    root.destroy()


# Run no-dpi-socks.exe without a command prompt
# NDS stands for no dpi socks
def run_nds_silently():
    try:
        exe_path = 'no-dpi-socks.exe'

        # Check if no-dpi-socks.exe exists
        if not os.path.exists(exe_path):
            raise FileNotFoundError(f'{exe_path} not found.')

        # Hide window
        si = subprocess.STARTUPINFO()
        si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
        si.wShowWindow = subprocess.SW_HIDE

        # Start NDS without opening a command console
        process = subprocess.Popen(exe_path, startupinfo=si)
        process.wait()

    except FileNotFoundError as e:
        # Show a GUI error window if no-dpi-socks.exe is not found
        show_error_window(str(e))


run_nds_silently()
