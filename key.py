import pyautogui
import keyboard

def move_mouse_smoothly():
    try:
        screen_width, screen_height = pyautogui.size()
        x, y = screen_width // 2, screen_height // 2  # Start from the center of the screen

        while True:
            # Move the mouse smoothly to the right edge of the screen
            pyautogui.moveTo(screen_width, y, duration=5.0, tween=pyautogui.easeInOutQuad)
            x, y = pyautogui.position()

            # Move the mouse smoothly to the left edge of the screen
            pyautogui.moveTo(0, y, duration=5.0, tween=pyautogui.easeInOutQuad)
            x, y = pyautogui.position()

    except keyboard.KeyboardInterrupt:
        print("Mouse movement interrupted by keyboard input.")

if __name__ == "__main__":
    move_mouse_smoothly()
